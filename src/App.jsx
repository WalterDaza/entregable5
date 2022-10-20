import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'
import './style/home/home.css'
import './style/pokedex/cardpoke.css'
import './style/pokedex/pokedex.css'
import './style/pokedex/pagination.css'
import "./style/pokedexById/pokedexById.css"
import PokemonError from './components/home/pokedexById/PokemonError'
import "./style/pokedexById/pokemonError.css"

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route className="hola" path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexById />} />
        </Route>
        <Route path="/pokemonerror" element={<PokemonError />}/>
      </Routes>
    </div>
  )
}

export default App
