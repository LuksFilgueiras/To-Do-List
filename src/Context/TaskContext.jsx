import { createContext, useEffect, useState } from "react";
import { db, auth } from '../Firebase/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

export const TaskContext = createContext();

export const TaskProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    const todosRef = collection(db, "todos");
    
    useEffect(() => {  /* eslint-disable-line */
        fetchToDos();  /* eslint-disable-line */
    }, []);  /* eslint-disable-line */

    // TODO REQUESTS

    const fetchToDos = async () =>{
        setLoading(true);
        const response = await getDocs(todosRef);
        const userData = response.docs.filter(doc => doc.data().user_uid === auth?.currentUser?.uid ? doc : null)
        const filteredData = userData.map(doc => ({...doc.data(), id: doc.id}))
        setTodos(filteredData)
        setLoading(false);
    }

    const addToDo = async (todo) => {  
        let newTodoDoc = {...todo, "user_uid": auth?.currentUser?.uid}
        await addDoc(todosRef, newTodoDoc)
        fetchToDos();
    }

    const updateToDo = async (todo) =>{
        const newTodo = doc(db, "todos", todo.id)
        await updateDoc(newTodo, {"tasks": todo.tasks});
        fetchToDos();
    }

    const deleteToDo = async (todo) => {
        const todoDoc = doc(db, "todos", todo.id)
        await deleteDoc(todoDoc)
        fetchToDos();
    }
    return(
        <TaskContext.Provider value={{todos, loading, setTodos, fetchToDos, addToDo, updateToDo, deleteToDo}}>
            {children}
        </TaskContext.Provider>
    )
}