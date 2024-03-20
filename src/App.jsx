
import './App.css'
import { BaseComponet } from './componet/BaseCompont/Basecompont'
import { Firstcard } from './componet/Frirstcard/Firstcard'
import { SecondCard } from './componet/SecondCard/SecondCard'
import { ThirdCard } from './componet/ThirdCard/ThirdCard'
function App() {


  return (
    <div style={{display:"flex",gap:"20px",flexDirection:"column"}}>
      <BaseComponet />
      <Firstcard />
      <SecondCard/>
      <ThirdCard/>
    </div>
  )
}

export default App
