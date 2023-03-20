import { TodoContainer } from "./styles"

function Todo({title}) {
  return (
    <TodoContainer>
        <h1 className="title">{title}</h1>
        <h2 className="add-task">Add new Task</h2>
    </TodoContainer>
  )
}

export default Todo