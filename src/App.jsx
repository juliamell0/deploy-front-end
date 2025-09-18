import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servico from './pages/Servico'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <div classsName="app">
      <Header/>
      <main classsName='container'>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/servico' element={<Servico/>}/>
          <Route path ='/sobre-nos' element={<SobreNos/>}/>
          <Route path ='fale-conosco' element={<FaleConosco/>}/>
        </Routes>


      </main>
      <Main/>
      <Footer/>
    </div>
    </>
  )
}

export default App
