import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CardPoke from '../components/home/pokedex/CardPoke'
import InputSearch from '../components/home/pokedex/InputSearch'
import Pagination from '../components/home/pokedex/Pagination'
import SelectByType from '../components/home/pokedex/SelectByType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState("All Pokemons")

  useEffect(()=> {
    if(typeSelected !== "All Pokemons"){
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    }else{
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])


  const userName = useSelector(state => state.userName)

  //logica de paginación

  const [page, setPage] = useState(1)
  const [pokePerPage, sePokePerPage] = useState(8)
  const initialPoke = (page-1) * pokePerPage
  const finalPoke = page * pokePerPage

  //navigator
  const navigate = useNavigate()
  
  const handleNavigation = () => {
    navigate("/")
  } 


  return (
    <div className='pokedex_container'>
      <header className='pokedex_title_welcome'>
          <h1 className='pokedex_title'>Pokedex</h1>
      <div className='button_home'onClick={handleNavigation}><i className='bx bxs-home'></i></div>
      </header>
          <p className='pokedex_welcome'>Welcome <span className='pokedex_user_name'>{userName}</span>, here you can find your favorite pokemon</p>
      <aside>
        <div className='container_input_select'>
        <InputSearch />
        <SelectByType 
        setTypeSelected={setTypeSelected}
        setPage={setPage}
        />
        </div>
        <Pagination 
        page={page}
        pageLength = {pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage ={setPage}
        />
      </aside>
      <main>
        <div className='pokemon_container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke 
              key={pokemon.url}
              url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <Pagination 
        page={page}
        pageLength = {pokemons && Math.ceil(pokemons.length / pokePerPage)}
        setPage ={setPage}
        />
    </div>
  )
}

export default Pokedex