import { TaskCheckbox, TaskContainer, TaskEdit, TaskDelete } from "./styles"
import {  AiOutlineCloseSquare } from 'react-icons/ai';
import { useContext } from "react";
import { TaskContext } from "../../../Context/TaskContext";

function TodoTask({task, todo, backgroundColor}) {
  const {updateToDo} = useContext(TaskContext);
  
  const onChangeHandler = (e) => {
    e.preventDefault();
    
    if(task.progress === 0){
      task.progress = 1;
    }
    else if(task.progress === 1){
      task.progress = 2;
    }
    else{
      task.progress = 0;
    }

    let newTasks = todo.tasks.map(item => item === task ? {...item, "progress": task.progress} : item);
    todo.tasks = newTasks;
    updateToDo(todo);
  }

  const deleteTask = () => {
      let newTasks = todo.tasks.filter(item => item !== task ? item : null)
      todo.tasks = newTasks;
      updateToDo(todo);
  }

  return (
    <TaskContainer>
        <TaskCheckbox 
        type="checkbox"
        backgroundColor={backgroundColor}
        defaultChecked={task.progress === 1 || task.progress === 2 ? "checked" : ""} 
        onClick={onChangeHandler}
        />

        <TaskEdit textDecoration={task.progress === 2 ? "line-through" : "none"} >{task.content}</TaskEdit>
        <TaskDelete onClick={deleteTask}>
          <AiOutlineCloseSquare/>
        </TaskDelete>
    </TaskContainer>
  )
}

export default TodoTask