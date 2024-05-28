import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gastronomy_Form from './pages/Gastronomy_Form'
import { GastronomyProvider } from './context/GastronomyContext'
import GastronomyCard from './components/GastronomyCard'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'


function App() {


  return (
    <>
      <AuthProvider>
        <GastronomyProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/form' element={<Gastronomy_Form />} />
            </Routes>
          </BrowserRouter>
        </GastronomyProvider>
      </AuthProvider>
    </>
  )
}

export default App



