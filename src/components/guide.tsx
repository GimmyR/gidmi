//import GuideBody from "@/components/guide-body";
import NavMenu from "@/components/navigation-menu";

import { ReactNode } from "react";
import PreviousNext from "./previous-next";

export default async function Guide({ 
	title,
	previous,
	next,
	children 
} : { 
	title: string,
	previous: { route: string, title: string } | null,
	next: { route: string, title: string } | null,
	children: ReactNode 
}) {
    return (
		<div className="container-fluid d-flex flex-row min-vh-100 mt-5 pt-5 px-0 text-light">
			<div className="offcanvas-lg offcanvas-start col-4 col-lg-3 bg-dark text-light" id="navigation" tabIndex={-1} aria-labelledby="navigationLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="navigationLabel">Menu</h5>
					<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#navigation" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body d-flex flex-column px-3">
					<NavMenu selected={title}/>
				</div>
			</div>
			<div className="col-12 col-lg-6 p-2 p-lg-0">
				<h1 className="mb-5">{title}</h1>
				{children}
				<PreviousNext previous={previous} next={next}/>
			</div>
		</div>
    );
}