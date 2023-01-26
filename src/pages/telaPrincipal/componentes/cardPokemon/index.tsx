import { Pokemon } from "../../../../@types/pokemon";
import { Card, Col, Row, Tag, Typography } from "antd";
import "./index.css";

interface cardPokemonPros{
    objeto: Pokemon;
}

const cardPokemon = ({objeto}: cardPokemonPros): JSX.Element => {
    return(
        <Card hoverable>
            <Row>
                <Col span={24} className="container-img">
                    <img src={objeto.img} />
                </Col>
                <Col span={24} className="card_number">
                    <Typography.Text>N {objeto.num}</Typography.Text>
                </Col>
                <Col span={24} className="card_name">
                    <Typography.Title level={4}>{objeto.name}</Typography.Title>
                </Col>
                <Col span={24} className="card_tags">
                    {objeto.type.map((nomeCaracteristica) => (
                        <Tag className="card_tags_tag" color="magenta" key={nomeCaracteristica}>{nomeCaracteristica}</Tag>
                    ))}
                </Col>
            </Row>
        </Card>
    )
}

export default cardPokemon