"use client";
import React from "react";
import { updateLocalStorageTodos } from "@/utils/localStorageUtils";

function Form({ todos, setTodos }) {
    const [errMessage, setErrMessage] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        const value = e.target.todo.value.trim();
        if (!value) {
            setErrMessage("Please enter name of the task");
            return;
        }

        const newTodo = { title: value, id: window.crypto.randomUUID(), is_completed: false };

        // update the state with the new todo
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        // store the updated list of todos in local storage
        updateLocalStorageTodos([...todos, newTodo]);

        e.target.reset(); // clear the input field
        setErrMessage(""); // clear the error message
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="todo">
                    <input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Write your next task"
                        autoComplete="off"
                    />
                </label>
                <button>
                    <span className="visually-hidden">Submit</span>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
                    </svg>
                </button>
            </form>
            { errMessage && <p className="error-message">{errMessage}</p>}
        </>
    );
}

export default Form;
