export default function Loading() {

    return (
        <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <span className="ms-2">Loading</span>
        </div>
    );

}