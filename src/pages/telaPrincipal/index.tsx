import { Row, Col } from "antd";

import CardPokemon from "./componentes/cardPokemon";
import { Pokemon } from "../../@types/pokemon";

const App = (): JSX.Element => {
    const listPokemons: Pokemon[] = [
        {
          img: "",
          cod: "001",
          nome: "Bulbasaur",
          caracteristicas: ["Grass", "Poison"],
        },
        {
          img: "",
          cod: "002",
          nome: "Charmander",
          caracteristicas: ["Fire"],
        },
        {
          img: "",
          cod: "003",
          nome: "Blastoise",
          caracteristicas: ["Water"],
        },
        {
          img: "",
          cod: "004",
          nome: "Ivysaur",
          caracteristicas: ["Grass", "Poison"],
        },
      ];
      
    return (
        <div className="container-main">
            <h1>Cabecalho</h1>
            <div className="container-list">
              <Row gutter={[15,15]} className = "row">
                {listPokemons.map((pokemon) => (
                  <Col span={6} key={pokemon.cod}>
                    <CardPokemon objeto={pokemon}/>
                  </Col>
                ))}
              </Row>
            </div>
        </div>
    )
}

export default App