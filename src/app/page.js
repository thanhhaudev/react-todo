"use client";
import React from "react";
import Form from "@/components/form";
import Header from "@/components/header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function Home() {
    const [todos, setTodos] = React.useState([
        { title: "Buy groceries", id: self.crypto.randomUUID(), is_completed: false },
        { title: "Walk the dog", id: self.crypto.randomUUID(), is_completed: false },
        { title: "Wash the car", id: self.crypto.randomUUID(), is_completed: false },
    ]);

    return (
        <div className="wrapper">
            <Header />
            <TODOHero todos_completed={0} total_todos={0} />
            <Form />
            <TODOList todos={todos} />
        </div>
    )
}

export default Home;
