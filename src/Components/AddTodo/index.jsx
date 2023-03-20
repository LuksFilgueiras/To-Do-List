import { InputContainer, InputText, AddButton } from "./styles";


function AddTodo() {
  return (
    <InputContainer>
        <InputText placeholder="Add a Todo!" type="text" id="todo" name="todo"/>
        <AddButton>
            ADD
        </AddButton>
    </InputContainer>
  )
}

export default AddTodo