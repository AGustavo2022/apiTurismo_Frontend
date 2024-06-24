import React from 'react'
import GastronomyCards from '../../components/Gastronomy/GastronomyCards';


import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';




function GastronomyPage() {
  const navigate = useNavigate()
  return (
    <>
    <div className="m-4">
      <Button onClick={() => { navigate('/gastronomy/from') }} variant="contained" >Agregar Local Comercial</Button>
    </div>
    <GastronomyCards/>
    </>
  )
}

export default GastronomyPage