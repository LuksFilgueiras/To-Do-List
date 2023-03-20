import { InputContainer, InputText, AddButton } from "./styles";
import { useState } from "react";


function AddTodo() {
    const [title, setTitle] = useState("");
    
    const OnChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const AddTodo = () => {
        let newTodo = {
            "title": title,
        }

        fetch("http://localhost:3333/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
          })
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