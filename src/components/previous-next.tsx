import PreviousLink from './previous-link';
import NextLink from './next-link';

export default function PreviousNext({ 
    previous, next 
} : { 
    previous: { route: string, title: string } | null, 
    next: { route: string, title: string } | null 
}) {
    return (
        <div className="d-flex flex-row my-5">
            <div className="d-flex flex-row justify-content-start col-6">
                <PreviousLink link={previous}/>
            </div>
            <div className="d-flex flex-row justify-content-end col-6">
                <NextLink link={next}/>
            </div>
        </div>
    );
}