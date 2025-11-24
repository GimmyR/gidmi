import Loading from "@/components/loading";

export default function Continue({ isLoading } : { isLoading: boolean }) {

    return (
        <button className='btn btn-primary col-12 mb-3' disabled={isLoading}>
            {isLoading ? <Loading/> : 'Continue'}
        </button>
    );

}