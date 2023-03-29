import { TodosDisplay, LoadingGif, LoadingContainer } from './styles'

import AddTodo from '../../AddTodo'
import Header from '../../Layout/Header'
import PageWrapper from '../../Layout/PageWrapper'
import Todo from '../../Todo'

import { TaskContext } from '../../../Context/TaskContext'
import { useContext } from 'react'
import { useEffect } from 'react'

import loadingSrc from '../../../Images/loading.gif'

function MainPage() {
  const { todos, fetchToDos, loading } = useContext(TaskContext)

  useEffect(() => {  /* eslint-disable-line */
    fetchToDos();  /* eslint-disable-line */
  }, [])  /* eslint-disable-line */


  return (
    <>
    <Header/>
    <PageWrapper>
      <AddTodo/>
      <LoadingContainer>{loading ? <LoadingGif src={loadingSrc} alt="loading..."/>: null}</LoadingContainer>
      { 
        todos.length > 0 ?
        <TodosDisplay>
            {
              todos.map((todo, index) => {
                return <Todo key={index} id={index} title={todo.title} todo={todo}/>
              })
            }
        </TodosDisplay> 
        : <></>
      } 
    </PageWrapper>
    </>
  )
}

export default MainPage