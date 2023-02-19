import { Pokemon } from "../../../../@types/pokemon";
import { Card, Col, Row, Tag, Typography } from "antd";
import "./index.css";
import colorsTag from "./colorTags.json"

interface cardPokemonPros{
    objeto: Pokemon;
}

const cardPokemon = ({objeto}: cardPokemonPros): JSX.Element => {

    const compareTagColor = (tag: string)=>{
        if(tag === "Water"){
            return "blue"
        }
        if(tag === "Grass"){
            return "green"
        }
        if(tag === "Ground"){
            return "brown"
        }
        if(tag === "Fire"){
            return "red"
        }
        if(tag === "Fire"){
            return "red"
        }
    }

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
                    {objeto.type.map((type) => 
                        colorsTag.filter(item=> type === item.tag).map( t =>{
                            return(
                                <Tag className="card_tags_tag" color={t.color} key={t.tag}>{t.tag}</Tag>
                            )
                        })
                    
                    )}
                </Col>
            </Row>
        </Card>
    )
}

export default cardPokemon