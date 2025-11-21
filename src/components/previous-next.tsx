import PreviousLink from './previous-link';
import NextLink from './next-link';

type Endpoint = {
    route: string,
    title: string
};

export default function PreviousNext({ previous, next } : { previous: Endpoint | undefined, next: Endpoint | undefined }) {
    return (
        <section className="d-flex flex-row my-5">
            <div className="d-flex flex-row justify-content-start col-6">
                <PreviousLink link={previous}/>
            </div>
            <div className="d-flex flex-row justify-content-end col-6">
                <NextLink link={next}/>
            </div>
        </section>
    );
}