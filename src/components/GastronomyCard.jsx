import React, { useEffect, useState } from 'react';
import Card from './Card'
import { useGastronomy } from '../context/GastronomyContext';



function GastronomyCard() {

  const { gastronomy, getGastronomy }= useGastronomy ()

  useEffect(() => {
    getGastronomy()
  }, [])

    return (
        <div className="flex flex-wrap">
            {gastronomy.map(e => (
                <Card
                    key={e.id}
                    imageUrl={`http://localhost:8080/${e.photo_url}`}
                    name={e.name}
                    address={e.address}
                />
            ))}
        </div>
    );
}

export default GastronomyCard