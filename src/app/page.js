import React from "react";
import Form from "@/components/form";
import Header from "@/components/header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";

function Home() {
    return (
        <div className="wrapper">
            <Header />
            <TODOHero todos_completed={0} total_todos={0} />
            <Form />
            <TODOList todos={[]} />
        </div>
    )
}

export default Home;
