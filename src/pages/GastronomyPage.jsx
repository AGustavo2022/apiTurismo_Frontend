import React from 'react'
import GastronomyForm from '../components/Gastronomy_Form'
import GastronomyCard from '../components/GastronomyCard'

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';




function GastronomyPage() {
  const navigate = useNavigate()
  return (
    <>
    <div className="m-4">
      <Button onClick={() => { navigate('/destination') }} variant="contained" >Agregar Local Comercial</Button>
    </div>
    <GastronomyCard/>
    </>
  )
}

export default GastronomyPage