import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { IdCss } from './ex/idcss/IdCss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IdCss/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
