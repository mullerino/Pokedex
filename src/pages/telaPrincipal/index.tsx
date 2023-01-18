import { useEffect, useState } from "react";
import axios, { all } from "axios";

import { Row, Col, Result } from "antd";

import CardPokemon from "./componentes/cardPokemon";
import { Pokemon } from "../../@types/pokemon";

import "./index.css"
import CampoText from "./componentes/campoText";
import Filtro from "./componentes/Filtro";


const App = (): JSX.Element => {

    const [textDigitado, setTextDigitado] = useState<string>('')
    const [data,setData] = useState<Pokemon[]>([])
    const [list,setList] = useState(data)
    const [att, setAtt] = useState<string>()

    useEffect(() => {
      axios.get
      ('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(({data}) => {
        setData(data.pokemon)
        setList(data.pokemon)
      })
      .catch((error) => {console.log(error)})
    },[]) 

    const FiltrarAtt = (types: string[])=>{
      const [type1= '',type2=''] = types?.slice(0,types.length)
      
      if(type1.toLowerCase() == att || type2.toLowerCase() == att){
        return true
      }
      else if(att === "all"){
        return true
      }
      else{
        return false
      }
    }

    useEffect(()=>{
      const newData = data.filter(pok => pok.name.toLowerCase().includes(textDigitado) && FiltrarAtt(pok.type))
      setList(newData)
    }, [textDigitado, att])


    return (
        <div className="container-main">
            <section className="logo">
              <img src="/logo_pokemon.png" alt="Logo"/>
            </section>
            <section className = "search">
              <CampoText buscarPokemons={textInput => setTextDigitado(textInput)}/>
              <Filtro setAtributo = {setAtt}></Filtro>
            </section>
            <div className="container-list">
              <Row gutter={[15,15]} className = "row">
                {list.map((pokemon) => {
                    return (
                      <Col span={6} key={pokemon.id}>
                          <CardPokemon objeto={pokemon}/>
                      </Col>
                    )
                })}
              </Row>
            </div>
        </div>
    )
}

export default App