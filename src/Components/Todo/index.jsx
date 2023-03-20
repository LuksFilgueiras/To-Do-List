import { TodoContainer } from "./styles"

function Todo({title}) {
  return (
    <TodoContainer>
        <h1 className="title">{title}</h1>
    </TodoContainer>
  )
}

export default Todo