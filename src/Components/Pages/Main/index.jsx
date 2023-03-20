import { TodosDisplay } from './styles'

import AddTodo from '../../AddTodo'
import Header from '../../Layout/Header'
import PageWrapper from '../../Layout/PageWrapper'
import Todo from '../../Todo'


import { useEffect, useState } from 'react'

function MainPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/todos")
    .then((response) => response.json())
    .then(data =>
    {
      setTodos(data);
    })
  }, []);

  return (
    <>
    <Header/>
    <PageWrapper>
      <AddTodo/>
      <TodosDisplay>
          {
            todos.map((todo) => {
              return <Todo key={todo.id} id={todo.id} title={todo.title}/>
            })
          }
      </TodosDisplay>
    </PageWrapper>
    </>
  )
}

export default MainPage