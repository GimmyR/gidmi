export default function SaveChapterForm({ chapters, setChapters, chapterToEdit, setChapterToEdit }) {
    const handleChange = (e) => {
        setChapterToEdit({...chapterToEdit, title: e.target.value});
    };

    const handleDeselect = () => {
        setChapterToEdit(undefined);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let index;

        for(index = 0; index < chapters.length; index++) {
            if(chapterToEdit.id == chapters[index].id) {
                chapters[index] = chapterToEdit;
                break;
            }
        }

        if(index == chapters.length)
            chapters.push({...chapterToEdit, id: "tmp_" + chapters.length});

        setChapters([...chapters]);
    };

    return (
        <form className="d-flex flex-row mb-3" onSubmit={handleSubmit}>
            <input type="text" className="form-control me-2 rounded-0" placeholder="Chapter title" value={chapterToEdit? chapterToEdit.title : ""} onChange={handleChange}/>
            <button type="submit" className="btn btn-danger me-2 rounded-0">
                Save
            </button>
            <button type="button" className="btn btn-secondary rounded-0" disabled={chapterToEdit == undefined} onClick={handleDeselect}>
                Reset
            </button>
        </form>
    );
}