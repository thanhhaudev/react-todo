"use client"

import React from "react";
import Form from "@/components/form";
import Header from "@/components/header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function Home() {
    const [todos, setTodos] = React.useState([]);

    // retrieve todos from local storage
    React.useEffect(() => {
        const localTodos = localStorage.getItem("todos");
        if (localTodos) {
            setTodos(JSON.parse(localTodos));
        }
    }, []);

    const todos_completed = todos.filter(
        (todo) => todo.is_completed === true
    ).length;

    const total_todos = todos.length;

    return (
        <div className="wrapper">
            <Header />
            <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
            <Form todos={todos} setTodos={setTodos}/>
            <TODOList todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default Home;
