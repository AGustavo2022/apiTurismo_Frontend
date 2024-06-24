import React, { useEffect } from 'react';
import GastronomyCard from './GastronomyCard'
import { useGastronomy } from '../../context/GastronomyContext';



function GastronomyCards() {

  const { gastronomy, getGastronomy }= useGastronomy ()

  useEffect(() => {
    getGastronomy()
  }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'> {/* Ajusta el valor de gap según tus necesidades */}
            {gastronomy.map((gastronomy) => (
                <GastronomyCard gastronomy={gastronomy} key={gastronomy.id}
                />
            ))}
        </div>
    );
}

export default GastronomyCards