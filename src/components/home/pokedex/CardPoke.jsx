import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CardPoke = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    },[])

    const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }


  return (
    <article className={`card_pokemon_container ${pokemon?.types[0].type.name}`} onClick={handleClick}>
        <header className='card_pokemon_img'>
         <img className='pokemon_img' src={pokemon?.sprites.other["official-artwork"].front_default} />
        </header>
        <section className='card_pokemon_info'>
            <ul className='card_list_type_container'>
                {
                    pokemon?.types.map(type => (
                        <li className='card_list_type' key={type.slot}>{type.type.name}</li>
                    ))
                }
            </ul>
            <ul className='card_list_stats_container'>
                {
                    pokemon?.stats.map (stat => (
                        <li className='card_list_stats' key={stat.stat.name}>
                            <span className='card_list_stats_name'>{stat.stat.name} </span>
                            <span className='card_list_stats_number'>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
        <div className={`card_number_pokemon ${pokemon?.types[0].type.name}_number`}>{`#${pokemon?.id}`}</div>
        <h3 className='card_name_pokemon'>{pokemon?.name}</h3>
    </article>
  )
}

export default CardPoke