import { useState } from 'react';

function App() {
    const [job, setJob] = useState('');
    const [todos, setTodo] = useState(() => {
        const jsonJobs = JSON.parse(localStorage.getItem('jobs'));
        return jsonJobs ?? [];
    });

    const handleClick = () => {
        setTodo((prev) => {
            const newTodo = [...prev, job];

            localStorage.setItem('jobs', JSON.stringify(newTodo));

            return newTodo;
        });
        setJob('');
    };

    const handleDelete = (e) => {
        setTodo((prev) => {
            const newTodo = [...prev].filter((item) => e.target.name !== item);

            localStorage.setItem('jobs', JSON.stringify(newTodo));

            return newTodo;
        });
    };

    return (
        <div className="App">
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleClick}>Add</button>

            <ul>
                {todos.map((todo, index) => {
                    return (
                        <div key={index} className="item">
                            <li>{todo}</li>
                            <button name={todo} onClick={(e) => handleDelete(e)}>
                                Xóa
                            </button>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
