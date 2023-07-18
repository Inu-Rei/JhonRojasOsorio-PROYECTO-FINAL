import React, { useEffect, useState } from 'react';
import { todoPersonajes } from '../funciones/funciones';

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null)
  useEffect(()=>{
    todoPersonajes(setPersonajes)
  },[])

  return (
    <>
    {personajes != null ? (
      personajes.map(personaje => (
      <div key={personaje.id} >
        <a href={`/personaje/${personaje.id}`} >{personaje.name}</a>
        <img src={personaje.image}></img>
      </div>
    ))
    ) : ('no hay personajes')}
    </>
  )
}

export default Inicio