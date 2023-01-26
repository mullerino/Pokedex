import { useEffect, useState } from "react"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import axios from 'axios'

import TelaPrincipal from "./pages/telaPrincipal"

import { Pokemon } from "./@types/pokemon"
import Detailpage from "./pages/DetailPage"

const App = ()=>{

    const [data,setData] = useState<Pokemon[]>([])
    
    useEffect(() => {
        axios.get
        ('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then(({data}) => {
          setData(data.pokemon)
        })
        .catch((error) => {console.log(error)})
      },[]) 

    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaPrincipal data = {data}/>}></Route>
                {data.map(pok =>{
                    return (
                        <Route 
                        key={pok.name} 
                        path={`/${pok.name}`} 
                        element = {
                            <Detailpage 
                            name = {pok.name}
                            num = {pok.num}
                            ></Detailpage>}>
                        </Route>
                    )
                })}
            </Routes>
        </Router>
    )
}

export default App