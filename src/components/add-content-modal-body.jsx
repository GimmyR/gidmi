export default function AddContentModalBody({ detail, setDetail, language, setLanguage, setImage }) {
    const handleTypeChange = (e) => {
        detail.type = e.target.value;
        detail.content = "";
        setDetail({...detail});
    };

    const handleContentChange = (e) => {
        detail.content = e.target.value;
        setDetail({...detail});
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <form>
            <div className={`${detail.type != "" && "mb-3"}`}>
                <select className="form-select text-bg-dark" onChange={handleTypeChange}>
                    <option value="">Select content type</option>
                    <option value="text">Text</option>
                    <option value="command">Command</option>
                    <option value="code">Code</option>
                    <option value="image">Image</option>
                </select>
            </div>
            <div>
                {detail.type === "command" ?
                    <input type="text" value={detail.content} onChange={handleContentChange} className="form-control text-bg-dark"/>
                : detail.type === "text" ?
                    <textarea value={detail.content} onChange={handleContentChange} className="form-control text-bg-dark"></textarea>
                : detail.type === "code" ?
                    <div>
                        <input type="text" value={language} onChange={handleLanguageChange} className="form-control text-bg-dark mb-3"/>
                        <textarea value={detail.content} onChange={handleContentChange} className="form-control text-bg-dark" rows="3"></textarea>
                    </div>
                : detail.type === "image" ?
                    <input type="file" className="form-control text-bg-dark" onChange={handleImageChange}/>
                : null}
            </div>
        </form>
    );
}