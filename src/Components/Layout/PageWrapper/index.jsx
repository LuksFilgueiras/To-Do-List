import { PageContainer } from "./styles"

function PageWrapper(props) {
  return (
    <PageContainer>
        {props.children}
    </PageContainer>
  )
}

export default PageWrapper