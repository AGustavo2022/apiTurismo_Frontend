import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gastronomy_Form from './pages/Gastronomy_Form'
import { GastronomyProvider } from './context/GastronomyContext'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ProtectedRoute'
import HomePage from './pages/HomePage'
import TransportPage from './pages/TransportPage'
import DestinationPage from './pages/DestinationPage'
import LodgePage from './pages/LodgePage'


function App() {


  return (
    <>
      <AuthProvider>
        <GastronomyProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
                <Route element={<ProtectedRoute/>}>
                  <Route path='/' element={<HomePage/>} />   
                  <Route path='/transport' element={<TransportPage/>} />
                  <Route path='/gastronomy' element={<Gastronomy_Form />} />
                  <Route path='/lodge' element={<LodgePage/>} />
                  <Route path='/destination' element={ <DestinationPage/>} />
                </Route>
            </Routes>
          </BrowserRouter>
        </GastronomyProvider>
      </AuthProvider>
    </>
  )
}

export default App



