import { useEffect, useState } from "react";
import axios from "axios";

import { Row, Col, Result } from "antd";

import CardPokemon from "./componentes/cardPokemon";
import { Pokemon } from "../../@types/pokemon";

import "./index.css"
import CampoText from "./componentes/campoText";


const App = (): JSX.Element => {

    const [textDigitado, setTextDigitado] = useState<string>('')
    const [data,setData] = useState<Pokemon[]>([])
    const [pokemonsFiltrados, setPokemonsFiltrados] = useState<Pokemon[]>([])

    useEffect(() => {
      axios.get
      ('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(({data}) => {
        setData(data.pokemon)
      })
      .catch((error) => {console.log(error)})
    },[]) 

    const namePoks = data.map(item=> item.name.toLowerCase())

    const pokFilter = namePoks.filter((nome) => nome.includes(textDigitado.toLowerCase()))

    console.log(pokFilter)

    //setPokemonsFiltrados(data.filter((pokemons) => pokemons.name.includes(pokFilter)))

    return (
        <div className="container-main">
            <section className="logo">
              <img src="/logo_pokemon.png" alt="Logo"/>
            </section>
            <section>
              <CampoText buscarPokemons={textInput => setTextDigitado(textInput)}/>
            </section>
            <div className="container-list">
              <Row gutter={[15,15]} className = "row">
                {data.map((pokemon) => {
                  if(pokemon.name.toLowerCase().includes(textDigitado.toLowerCase())){
                    return (
                      <Col span={6} key={pokemon.id}>
                          <CardPokemon objeto={pokemon}/>
                      </Col>
                    )
                }})}
              </Row>
            </div>
        </div>
    )
}

export default App