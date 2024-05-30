import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GastronomyProvider } from './context/GastronomyContext'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ProtectedRoute'
import HomePage from './pages/HomePage'
import TransportPage from './pages/TransportPage'
import DestinationPage from './pages/DestinationPage'
import LodgePage from './pages/LodgePage'
import GastronomyPage from './pages/GastronomyPage'
import ProtectedLayout from './components/layout/ProtectedLayout'


function App() {


  return (
    <>
      <AuthProvider>
        <GastronomyProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<ProtectedLayout />}>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/transport' element={<TransportPage />} />
                  <Route path='/gastronomy' element={<GastronomyPage />} />
                  <Route path='/lodge' element={<LodgePage />} />
                  <Route path='/destination' element={<DestinationPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </GastronomyProvider>
      </AuthProvider>
    </>
  )
}

export default App



