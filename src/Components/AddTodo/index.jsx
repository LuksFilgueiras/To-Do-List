import { InputContainer, InputText, AddButton } from "./styles";

import { useContext, useState } from "react";

import { TaskContext } from "../../Context/TaskContext";

function AddTodo() {
    const [todo, setTodo] = useState({"title": "New Todo", "tasks": []});
    
    const {addToDo} = useContext(TaskContext);

    const OnChangeHandler = (e) => {
        setTodo({...todo, "title": e.target.value})
    }

    const AddTodo = () => {
        addToDo(todo);
    }

  return (
    <InputContainer>
        <InputText placeholder="Add a ToDo!" type="text" id="todo" name="todo" onChange={OnChangeHandler}/>
        <AddButton onClick={AddTodo}>
            ADD
        </AddButton>
    </InputContainer>
  )
}

export default AddTodo