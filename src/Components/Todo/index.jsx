import { TodoContainer } from "./styles"
import {AiOutlinePlus} from 'react-icons/ai'
import TodoTask from "./TodoTask"

import { useContext, useState } from "react"
import { TaskContext } from "../../Context/TaskContext"



function Todo({title, todo}) {
  const {updateToDo} = useContext(TaskContext);
  const [content, setContent] = useState("New Task!");

  const onChangeHandler = (e) => {
    setContent(e.target.value);
  } 
  
  const AddTask = () =>{
      let newTask = {
        "progress": 0,
        "content": content
      }

      todo.tasks.push(newTask);

      updateToDo(todo);
  }


  return (
    <TodoContainer>
        <h1 className="title">{title}</h1>
        <div className="add-task-container">
          <input className="add-task" placeholder="Add New Task!" onChange={onChangeHandler}/>
          <span className="add-task-plus" onClick={AddTask}>{<AiOutlinePlus />}</span>
        </div>
        {
          todo.tasks.map((task, index) => {
            return <TodoTask key={index} task={task} todo={todo}/>
          })
        }
    </TodoContainer>
  )
}

export default Todo