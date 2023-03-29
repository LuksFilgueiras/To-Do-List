import { InputContainer, InputText, AddButton } from "./styles";

import { useContext, useState, useRef } from "react";

import { TaskContext } from "../../Context/TaskContext";

function AddTodo() {
    const [todo, setTodo] = useState({"tasks": [], "title": "New Todo" })
    const title = useRef(null);

    const {addToDo} = useContext(TaskContext);

    const OnChangeHandler = (e) => {
        console.log(todo);
        setTodo({...todo, "title": e.target.value})
    }

    const AddTodo = () => {
        title.current.value = ""
        addToDo(todo);
    }

  return (
    <InputContainer>
        <InputText ref={title} placeholder="Add a ToDo!" type="text" id="todo" name="todo" onChange={OnChangeHandler} />
        <AddButton onClick={AddTodo}>
            ADD
        </AddButton>
    </InputContainer>
  )
}

export default AddTodo