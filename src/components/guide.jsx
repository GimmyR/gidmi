import NavMenu from "@/components/navigation-menu";
import GuideContent from "./guide-content";
import PreviousNext from "./previous-next";
import VerticalAdsense from "./vertical-adsense";
import ArticleAdsense from "./article-adsense";

export default async function Guide({ title, parts, details }) {
	const findPrevious = () => {
		let counter = 0;
		for(let i = 0; i < parts.length; i++) {
			if(parts[i].title === title) {
				if(i === 0)
					return undefined;
				else return findPreviousOfPart(parts, i)
			} else {
				const result = findPreviousOfChapter(parts, i);

				if(result != undefined)
					return result;
			} counter++;

			if(counter === parts.length)
				return undefined;
		}
	};

	const findPreviousOfPart = (parts, i) => {
		const chapters = parts[i - 1].chapters;

		if(chapters.length > 0) {
			const chapter = chapters[chapters.length - 1];
			return {
				route: "/chapter/" + chapter.id,
				title: chapter.title
			};
		} else {
			return {
				route: "/part/" + parts[i - 1].id,
				title: parts[i - 1].title
			};
		}
	};

	const findPreviousOfChapter = (parts, i) => {
		let counter = 0;
		const chapters = parts[i].chapters;

		for(let j = 0; j < chapters.length; j++) {
			if(chapters[j].title === title) {
				if(j === 0)
					return {
						route: "/part/" + parts[i].id,
						title: parts[i].title
					};
				else {
					return {
						route: "/chapter/" + chapters[j - 1].id,
						title: chapters[j - 1].title
					};
				}
			} else counter++;

			if(counter === chapters.length)
				return undefined;
		}
	};

	const findNext = () => {
		let counter = 0;

		for(let i = 0; i < parts.length; i++) {
			if(parts[i].title === title)
				return findNextOfPart(parts, i);
				
			else {
				const result = findNextOfChapter(parts, i);

				if(result != undefined)
					return result;
			} counter++;

			if(counter === parts.length)
				return undefined;
		}
	};

	const findNextOfPart = (parts, i) => {
		if(parts[i].chapters.length > 0)
			return {
				route: "/chapter/" + parts[i].chapters[0].id,
				title: parts[i].chapters[0].title
			};
		else if(i === parts.length - 1)
			return undefined;
		else return {
			route: "/part/" + parts[i + 1].id,
			title: parts[i + 1].title
		};
	};

	const findNextOfChapter = (parts, i) => {
		let counter = 0;
		const chapters = parts[i].chapters;

		for(let j = 0; j < chapters.length; j++) {
			if(chapters[j].title === title) {
				if(j < (chapters.length - 1))
					return {
						route: "/chapter/" + chapters[j + 1].id,
						title: chapters[j + 1].title
					};
				else if(i < (parts.length - 1))
					return {
						route: "/part/" + parts[i + 1].id,
						title: parts[i + 1].title
					};
			} else counter++;

			if(counter === chapters.length)
				return undefined;
		}
	};

    return (
		<div className="container-fluid d-flex flex-row min-vh-100 mt-5 pt-5 px-0 text-light">
			<div className="offcanvas-lg offcanvas-start col-4 col-lg-3 bg-dark text-light" id="navigation" tabIndex={-1} aria-labelledby="navigationLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="navigationLabel">Menu</h5>
					<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#navigation" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body d-flex flex-column align-items-center px-3">
					<NavMenu parts={parts} selected={title}/>
					<VerticalAdsense className="mt-4 mb-5"/>
				</div>
			</div>
			<div className="col-12 col-lg-6 p-2 p-lg-0">
				<h1 className="mb-5">{title}</h1>
				{details.map((detail) => <GuideContent key={detail.id} detail={detail}/>)}
				<ArticleAdsense className="my-5"/>
				<PreviousNext previous={findPrevious()} next={findNext()}/>
			</div>
			<div className="d-none d-lg-block col-lg-3">
				<div className="d-flex flex-column align-items-center px-3">
					<VerticalAdsense className="mt-2"/>
				</div>
			</div>
		</div>
    );
}