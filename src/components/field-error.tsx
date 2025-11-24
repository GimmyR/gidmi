export default function FieldError({ message } : { message: string }) {

    if(!message)
        return null;

    return (
        <div className="mt-3">{message}</div>
    );

}