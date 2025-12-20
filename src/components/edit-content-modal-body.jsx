export default function EditContentModalBody({ type, content, handleChange, handleImageChange }) {
    return (
        <form>
            {type === "command" ?
                <input type="text" value={content} onChange={handleChange} className="form-control text-bg-dark"/>
            : type === "text" ?
                <textarea value={content} onChange={handleChange} className="form-control text-bg-dark"></textarea>
            : type === "image" ?
                <input type="file" onChange={handleImageChange} className="form-control text-bg-dark"/>
            : <textarea value={content} onChange={handleChange} className="form-control text-bg-dark" rows="3"></textarea>}
        </form>
    );
}