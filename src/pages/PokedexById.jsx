import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PokemonError from '../components/home/pokedexById/PokemonError'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err =>{ 
      console.log(err)
      setHasError(true)
    })
  }, [])

  console.log(pokemon)
  
  const navigate = useNavigate()

  if(hasError){
    return navigate("/pokemonerror")
  }  
    const handleNavigation = () => {
      navigate("/pokedex")
    } 

  return (
    <article className={`pokemonbyid_container ${pokemon?.types[0].type.name}`}>
      <header className="">
      <div className='pokemonbyid_container_title_img'>
      <img  className='pokemonbyid_img_default' src={pokemon?.sprites.front_default} />
      <h1 className='pokemonbyid_tittle_name'>#{pokemon?.id} {pokemon?.name}</h1>
      <img className='pokemonbyid_img_default' src={pokemon?.sprites.back_default} />
      <img className='pokemonbyid_img_official' src={pokemon?.sprites.other["official-artwork"].front_default} />
      </div>
      <div className='pokemonbyid_container_info'>
      <ul className='pokemonbyid_containter_type'>
        <div className='pokemonbyid_heigth'>
        <span className='pokemonbyid_weight_title'>Heigth </span>
        <span>{pokemon?.height}</span>
        </div>
        <span className={`pokemonbyid_type ${pokemon?.types[0].type.name}_number`}>{pokemon?.types[0].type.name}</span>
        <span className={`pokemonbyid_type ${pokemon?.types[1] ? pokemon?.types[1].type.name : "second"}_number`}>{ pokemon?.types[1] && pokemon?.types[1].type.name}</span>
        <div className='pokemonbyid_weight'>
        <span className='pokemonbyid_weight_title'>Weight </span>
        <span>{pokemon?.weight}</span>
        </div>
      </ul>

      <h1>abilities</h1>
      <ul className='pokemonbyid_containter_ability'>
          {
            pokemon?.abilities.map(ability => (
              <li className='pokemonbyid_ability' key={ability.ability.url}>
                {ability.ability.name}</li>
            ))
          }
      </ul>
      </div>

      <article className='pokemonbyid_container_info stats' >
          <h1 className='pokemonbyid_title_stats'>Stats</h1>

          {
            pokemon?.stats.map(stat => (
              <>
              <div key={stat.stat.url} className='pokemonbyid_container_stats'>
              <h1 className='pokemonbyid_stats_title'>{stat.stat.name}</h1>
              <div className='pokemonbyid_stats'>
                <div  style={{ width:`${100*(stat.base_stat)/150}%`}} 
                className={`stats_percentage ${pokemon?.types[0].type.name}_number` }>{stat.base_stat}/150</div>
              </div>
              </div>
              </>
            ))
          }
      </article>    
          
      <article className='pokemonbyid_container_info '>
         <h1 className='pokemonbyid_title_moves'>moves</h1>
      <div className='moves'>
            {
              pokemon?.moves.map(moves => (
                <span className='pokemonbyid_moves' key={moves.move.url}>{moves.move.name}</span>
                ))
              }
      </div>
        </article>
      </header>
        <div onClick={handleNavigation} className='button_exit'><i className='bx bxs-chevron-left-circle'></i></div>
    </article>
  )  
}


export default PokedexById