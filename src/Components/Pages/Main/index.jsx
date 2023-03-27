import { TodosDisplay } from './styles'

import AddTodo from '../../AddTodo'
import Header from '../../Layout/Header'
import PageWrapper from '../../Layout/PageWrapper'
import Todo from '../../Todo'

import { TaskContext } from '../../../Context/TaskContext'
import { useContext } from 'react'

function MainPage() {
  const { todos } = useContext(TaskContext)


  return (
    <>
    <Header/>
    <PageWrapper>
      <AddTodo/>
      { 
        todos.length > 0 ?
        <TodosDisplay>
            {
              todos.map((todo) => {
                return <Todo key={todo.id} id={todo.id} title={todo.title} todo={todo}/>
              })
            }
        </TodosDisplay> 
        : <p>You do not have to-dos...</p>
      } 
    </PageWrapper>
    </>
  )
}

export default MainPage