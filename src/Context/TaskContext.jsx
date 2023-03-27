import { createContext, useEffect, useState } from "react";
import { db, auth } from '../Firebase/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const todosRef = collection(db, "todos");

    useEffect(() => {
        fetchToDos();
    }, []);

    // TODO REQUESTS

    const fetchToDos = async () =>{
        console.log(todos)
        const response = await getDocs(todosRef);
        const userData = response.docs.filter(doc => doc.data().user_uid === auth?.currentUser?.uid ? doc : null)
        const filteredData = userData.map(doc => ({...doc.data(), id: doc.id}))
        setTodos(filteredData)
    }

    const addToDo = async (todo) => {  
         await addDoc(todosRef, {...todo, "user_uid": auth?.currentUser?.uid})
         fetchToDos();
    }

    const updateToDo = async (todo) =>{
        const newTodo = doc(db, "todos", todo.id)
        await updateDoc(newTodo, {"tasks": todo.tasks});
        fetchToDos();
    }

    const deleteToDo = async (todo) => {
        const todoDoc = doc(db, "todos", todo.id)
        await deleteDoc(todoDoc);
        fetchToDos();
    }
    return(
        <TaskContext.Provider value={{todos, setTodos, fetchToDos, addToDo, updateToDo, deleteToDo}}>
            {children}
        </TaskContext.Provider>
    )
}