import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import { BoxModel } from './ex/boxmodel/BoxModel'
// import { CustomLinks } from './ex/customlinks/CustomLinks'
// import { PseudoClass } from './ex/pseudoclass/PseudoClass'
// import { IdCss } from './ex/idcss/IdCss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<IdCss/>}/> */}
        {/* <Route path='/' element={<PseudoClass/>}/> */}
        {/* <Route path='/' element={<CustomLinks/>}/> */}
        {/* <Route path='/' element={<BoxModel/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
