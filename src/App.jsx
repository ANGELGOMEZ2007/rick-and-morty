import { useRef, useState } from 'react';
import './App.css'
import PokeCard from './components/PokeCard';
import usePoke from './hooks/usePoke';

function App() {
  const [inputValue, setInputValue] = useState(2)
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${inputValue}`

  const pokeapis = usePoke(url)

  const inputPoke = useRef()

  const handleSumit = e => {
    e.preventDefault()
    setInputValue(inputPoke.current.value) 
    
  }


  return (
    <div className="App">
      <form onSubmit={handleSumit}>
        <input ref={inputPoke} type="number" />
        <button>sumit</button>
      </form>
      {
        pokeapis?.results.map(pokeapi => (

          <PokeCard key={pokeapi.url} url={pokeapi.url} />

        ))



      }
    </div>
  )
}

export default App
