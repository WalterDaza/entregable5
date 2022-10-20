import React from 'react'
import FormHome from '../components/home/FormHome'


const Home = () => {

  return (
    <section className='card_home_container'>
      <img className='card_home_title' src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"></img>
      <div className='card_home'>
      <img className='card_home_img' src='https://i.pinimg.com/originals/18/05/22/180522d0ca9eb6d8c08abacacafce044.gif'></img>
      <div className='card_home_info'>
      <h1 className='title'>Hi Trainer!</h1>
      <p className='phrase'>To start, put your name coach</p>
      <FormHome />
      </div>
      </div>
    </section>
  )
}

export default Home