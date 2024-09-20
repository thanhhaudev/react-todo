// src/components/Form.jsx
function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        console.log("Form Submitted");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next task"
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d=""/>
                </svg>
            </button>
        </form>
    );
}

export default Form;
