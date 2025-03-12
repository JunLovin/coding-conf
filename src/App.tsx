import Header from '@components/Header'
import Form from '@components/Form'
import lineTop from '@public/images/patternLineTop.svg'
import lineBottom from '@public/images/patternBottomDesktop.svg'

function App() {
  return (
    <>
    <img src={lineTop} alt="" className="absolute top-0 right-0 -z-0"/>
    <img src={lineBottom} alt="" className="absolute bottom-0 left-0 -z-1"/>
    <Header/>
    <Form />
    </>
  )
}

export default App