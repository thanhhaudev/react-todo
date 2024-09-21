// src/components/TODOHero.jsx
function TODOHero({ todos_completed, total_todos }) {
    return (
        <section className="todohero_section">
            <div>
                <p className="text_large">Task Done</p>
                <p className="text_small">
                    { todos_completed === total_todos ? "Congrats! You've completed all tasks" : "Keep it up!" }
                </p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}

export default TODOHero;
