import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slice/userName.slice'

const FormHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate() // redireccionar a otra ruta en este caso /pokedex

    const submit = e => {   
        e.preventDefault()
        const name = e.target.user.value
        dispatch(setUserNameGlobal(name.trim()))
        navigate("/pokedex")
    }

  return (
    <form className='card_home_form_container' onSubmit={submit}>
        <input className='card_home_input' type="text" id ="user" placeholder='Name'/>
        <button className='card_home_button'>Catch them all</button>
    </form>
  )
}

export default FormHome