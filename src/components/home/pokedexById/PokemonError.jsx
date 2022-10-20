import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PokemonError = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/pokedex")
  }

  return (
    <>
    <div className='pokemonerror_container'>
      <h1>Pokemon Not Found</h1>
      <h3 className='button_exit' onClick={handleNavigate}><i className='bx bxs-chevron-left-circle'></i></h3>
    </div>
    </>
  )
}

export default PokemonError