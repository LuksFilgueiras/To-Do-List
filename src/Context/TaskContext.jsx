import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchToDos();
    }, []);

    // TODO REQUESTS

    const fetchToDos = async () =>{
        const response = await fetch("http://localhost:3333/todos?_sort=id&_order=desc")
        const data = await response.json()
        setTodos(data)
    }

    const fetchToDoByID = async (todo) => {
        const response = await fetch("http://localhost:3333/todos/" + todo.id)
        const data = await response.json()
        return data;
    }

    const addToDo = async (todo) => {    
        const response = await fetch("http://localhost:3333/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo),
        })

        const data = await response.json();
        setTodos([data, ...todos]);
    }

    const updateToDo = async (todo) =>{
        const response = await fetch("http://localhost:3333/todos/" + todo.id, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo),
        })
        const data = await response.json();
        setTodos(todos.map(item => item.id === todo.id ? {...item, ...data} : item ));
    }

    const deleteToDo = async (todo) => {
        await fetch("http://localhost:3333/todos/" + todo.id, {
            method: "DELETE",
        })
        setTodos(todos.filter(item => item.id !== todo.id ? item : null));
    }
    return(
        <TaskContext.Provider value={{todos, fetchToDos, fetchToDoByID, addToDo, updateToDo, deleteToDo}}>
            {children}
        </TaskContext.Provider>
    )
}