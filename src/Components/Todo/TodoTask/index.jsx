import { TaskCheckbox, TaskContainer, TaskEdit, TaskDelete } from "./styles"
import {  AiOutlineCloseSquare } from 'react-icons/ai';
import { useContext } from "react";
import { TaskContext } from "../../../Context/TaskContext";

function TodoTask({task, todo}) {
  const {updateToDo} = useContext(TaskContext);

  const deleteTask = () => {
      let newTasks = todo.tasks.filter(item => item !== task ? item : null)
      todo.tasks = newTasks;
      updateToDo(todo);
  }

  return (
    <TaskContainer>
        <TaskCheckbox type="checkbox"/>
        <TaskEdit>{task.content}</TaskEdit>
        <TaskDelete onClick={deleteTask}>
          <AiOutlineCloseSquare/>
        </TaskDelete>
    </TaskContainer>
  )
}

export default TodoTask