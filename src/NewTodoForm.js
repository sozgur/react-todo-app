import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        title: "",
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    };
    return (
        <div>
            <h2>My To Do List</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </div>
    );
};

export default NewTodoForm;
