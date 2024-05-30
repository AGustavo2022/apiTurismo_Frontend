import React, { useEffect, useState } from 'react';
import Card from './Card'
import { useGastronomy } from '../context/GastronomyContext';



function GastronomyCard() {

  const { gastronomy, getGastronomy }= useGastronomy ()

  useEffect(() => {
    getGastronomy()
  }, [])

  //console.log(gastronomy)

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'> {/* Ajusta el valor de gap según tus necesidades */}
            {gastronomy.map(e => (
                <Card
                    key={e.id}
                    id={e.id}
                    imageUrl={`http://localhost:8080/${e.photo_url}`}
                    name={e.name}
                    address={e.address}
                />
            ))}
        </div>
    );
}

export default GastronomyCard