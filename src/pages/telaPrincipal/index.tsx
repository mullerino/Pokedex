import { useEffect, useState } from "react";
import axios, { all } from "axios";

import { Row, Col } from "antd";
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';

import CardPokemon from "./componentes/cardPokemon";
import { Pokemon } from "../../@types/pokemon";

import "./index.css"
import CampoText from "./componentes/campoText";
import Filtro from "./componentes/Filtro";
import { Link } from "react-router-dom";


interface ITelaPrincipal {
  data: Pokemon[]
}

const TelaPrincipal = ({data} : ITelaPrincipal): JSX.Element => {

    const [textDigitado, setTextDigitado] = useState<string>('')
    const [list,setList] = useState(data)
    const [att, setAtt] = useState<string>()

    useEffect(() => {
        setList(data)
        setTotal(data.length)
    },[data]) 

    const [page, setPage] = useState(1);
    const [total, setTotal] = useState<number>()
    const [postPerPage, setPostPerPage] = useState(12)

    const onChange: PaginationProps['onChange'] = (page) => {
      setPage(page);
    };

    const indexOfLastPage = postPerPage * page
    const indexOfFirstPage = indexOfLastPage - postPerPage
    const currentList = list.slice(indexOfFirstPage,indexOfLastPage)


    const FiltrarAtt = (types: string[])=>{
      const [type1= '',type2=''] = types?.slice(0,types.length)
      
      if(type1.toLowerCase() == att || type2.toLowerCase() == att){
        return true
      }
      else if(att === "all" || att === undefined){
        return true
      }
      return false
    }

    useEffect(()=>{
      const newData = data.filter(pok => pok.name.toLowerCase().includes(textDigitado.toLowerCase()) && FiltrarAtt(pok.type))
      setList(newData)
      setTotal(newData.length)
    }, [textDigitado, att])


    return (
        <div className="container-main">
            <section className="logo_text">
              <img src="/logo_pokemon.png" alt="Logo"/>
            </section>
            <section className = "search">
              <CampoText buscarPokemons={textInput => setTextDigitado(textInput)}/>
              <Filtro setAtributo = {setAtt}></Filtro>
            </section>
            <div className="container-list">
              <Row gutter={[15,15]} className = "row">
                {currentList.map((pokemon) => {
                    return (
                      <Col span={6} key={pokemon.id}>
                          <Link to= {`/${pokemon.name.toLowerCase()}`}><CardPokemon objeto={pokemon}/></Link>
                      </Col>
                    )
                })}
              </Row>
              <Pagination 
                size="small"
                current={page} 
                onChange={onChange} 
                total={total} 
                pageSize = {postPerPage} 
                className="pagination"/>
            </div>
        </div>
    )
}

export default TelaPrincipal