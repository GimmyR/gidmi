export default function SavePartForm({ menu, setMenu, partToEdit, setPartToEdit }) {
    const handleChange = (e) => {
        setPartToEdit({...partToEdit, title: e.target.value});
    };

    const handleDeselect = () => {
        setPartToEdit(undefined);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let index;

        for(index = 0; index < menu.length; index++) {
            if(partToEdit.id == menu[index].id) {
                menu[index] = partToEdit;
                break;
            }
        }

        if(index == menu.length)
            menu.push({...partToEdit, id: "tmp_" + index});

        setMenu([...menu]);
    };

    return (
        <form className="d-flex flex-row mb-3" onSubmit={handleSubmit}>
            <input type="text" className="form-control me-2 rounded-0" placeholder="Part title" value={partToEdit? partToEdit.title : ""} onChange={handleChange}/>
            <button type="submit" className="btn btn-danger me-2 rounded-0">
                Save
            </button>
            <button type="button" className="btn btn-secondary rounded-0" disabled={partToEdit == undefined} onClick={handleDeselect}>
                Reset
            </button>
        </form>
    );
}