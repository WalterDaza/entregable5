import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

const navigate = useNavigate()

const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
}

  return (
    <form className='card_form_container' onSubmit={submit}>
        <input className='form_input_search' type="text" id="search" placeholder='Search pokemon'/>
        <button className='form_button'>Search</button>
    </form>
  )
}

export default InputSearch