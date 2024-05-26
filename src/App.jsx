import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gastronomy_Form from './components/Gastronomy_Form'
import { GastronomyProvider } from './context/GastronomyContext'
import GastronomyCard from './components/GastronomyCard'


function App() {


  return (
    <>
      <GastronomyProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<GastronomyCard />} />
            <Route path='/form' element={<Gastronomy_Form />} />
          </Routes>
        </BrowserRouter>
      </GastronomyProvider>
    </>
  )
}

export default App



