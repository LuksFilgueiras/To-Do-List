import AddTodo from '../../AddTodo'
import Header from '../../Layout/Header'
import PageWrapper from '../../Layout/PageWrapper'

function MainPage() {
  return (
    <>
    <Header/>
    <PageWrapper>
      <AddTodo/>
    </PageWrapper>
    </>
  )
}

export default MainPage