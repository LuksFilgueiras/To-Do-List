import { TodosDisplay } from './styles'

import AddTodo from '../../AddTodo'
import Header from '../../Layout/Header'
import PageWrapper from '../../Layout/PageWrapper'
import Todo from '../../Todo'


import { useContext } from 'react'

import {TaskContext} from '../../../Context/TaskContext'

function MainPage() {
  const {todos} = useContext(TaskContext)


  return (
    <>
    <Header/>
    <PageWrapper>
      <AddTodo/>
      <TodosDisplay>
          {
            todos.map((todo) => {
              return <Todo key={todo.id} id={todo.id} title={todo.title} todo={todo}/>
            })
          }
      </TodosDisplay>
    </PageWrapper>
    </>
  )
}

export default MainPage