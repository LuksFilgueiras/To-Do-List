import { AddTaskContainer, TitleContainer, TodoContainer } from "./styles"
import {AiOutlinePlus,AiFillDelete} from 'react-icons/ai'
import TodoTask from "./TodoTask"

import { useContext, useState } from "react"
import { TaskContext } from "../../Context/TaskContext"



function Todo({title, todo}) {
  const {updateToDo, deleteToDo} = useContext(TaskContext);
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

  const deleteThisTodo = () => {
      deleteToDo(todo);
  }

  // FILTERS
  const filterNoneProgress = () => {
    let noneProgressTasks = todo.tasks.filter(item => item.progress === 0 ? item : null)
    return noneProgressTasks;
  }

  const filterInProgress = () => {
    let inProgressTasks =  todo.tasks.filter(item => item.progress === 1 ? item : null)
    return inProgressTasks;
  }

  const filterConcluded = () =>{
    let concludedTasks =  todo.tasks.filter(item => item.progress === 2 ? item : null)
    return concludedTasks;
  }

  return (
    <TodoContainer>
        <TitleContainer>
            <h1 className="title">{title}</h1>
            <span className="trash-bttn" onClick={deleteThisTodo}><AiFillDelete/></span>
        </TitleContainer>
        <AddTaskContainer>
          <input className="add-task" placeholder="Add New Task!" onChange={onChangeHandler}/>
          <span className="add-task-plus" onClick={AddTask}>{<AiOutlinePlus />}</span>
        </AddTaskContainer>

        {
          filterNoneProgress().map((task, index) => {
            return <TodoTask backgroundColor={"#333"} key={index} task={task} todo={todo}/>
          })
        }


        {
          filterInProgress().length > 0 ?
          (
            (
              <>
              <TitleContainer>
                    <h1 className="title">In Progress</h1>
              </TitleContainer>
              {          
                filterInProgress().map((task, index) => {
                return <TodoTask backgroundColor={"#567eb3"} key={index} task={task} todo={todo}/>
                })
              }
              </>
            )
          )
          :
          <></>
        }
        {
          filterConcluded().length > 0 ?
          (
            <>
            <TitleContainer>
              <h1 className="title">Concluded</h1>
            </TitleContainer>
            {
              filterConcluded().map((task, index) => {
                return <TodoTask backgroundColor={"#64b077"} key={index} task={task} todo={todo}/>
              })
            }
            </>
          )
          :
          <></>
        }
    </TodoContainer>
  )
}

export default Todo