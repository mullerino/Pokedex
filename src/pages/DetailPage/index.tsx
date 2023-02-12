import {Layout} from 'antd';
import './index.css'
import { Link } from 'react-router-dom';
import { Pokemon } from '../../@types/pokemon';

interface IDetailsPage extends Pokemon{}

const { Header, Content, Footer } = Layout;

const DetailsPage = ({ name,num, img, egg, type, height, weight, weaknesses, spawn_chance, next_evolution, prev_evolution } : IDetailsPage)=> {

    const typeEvolution = next_evolution == null ? 'Prev evolution' : 'Next evolution'

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: "#C6E1F5" }} />
                <Content className='content_container'>
                    <div className='content'>
                        <section className='content-title'>
                            <h2>{name}</h2>
                            <span>Nº{num}</span>
                        </section>
                        <section className='content-details'>
                            <div className='details-img'>
                                <img src={img}></img>
                                <div className='details-evolution'>
                                    <h3>{typeEvolution}</h3> 
                                    {next_evolution != null ? next_evolution.map(item =>{
                                        return(
                                            <Link key={item.num} to={`/${item.name}`}><span>{item.name}</span></Link>
                                        )
                                    })
                                    : prev_evolution.map(item =>{
                                        return (
                                            <Link  key={item.num} to={`/${item.name}`}><span>{item.name}</span></Link>
                                        )
                                    }) 
                                    }
                                </div>
                            </div>
                            <div className='details-info'>
                                <div className='info-card'>
                                    <div>
                                        <h3>Height</h3> 
                                        <span>{height}</span>
                                    </div>
                                    <div>
                                        <h3>Weight</h3> 
                                        <span>{weight}</span>
                                    </div>
                                    <div>
                                        <h3>Egg</h3> 
                                        <span>{egg}</span>
                                    </div>
                                    <div className='details-weakness'>
                                        <h3>Weakness</h3>
                                        {weaknesses.map(item =>{
                                            return (
                                                <span key={item}>{item}</span>
                                            )
                                        })}
                                    </div>
                                    <div>
                                        <h3>Spawn chances</h3> 
                                        <span>{spawn_chance}</span>
                                    </div>
                                    <div>
                                        <h3>{`Type${type.length>1 ? 's' : ''}`}</h3>
                                        {type.map(item =>{
                                            return (
                                                <span key={item}>{item}</span>
                                            )
                                        })}
                                    </div>
                                
                                </div>
                            </div>
                        </section>
                    </div>
                </Content>
                <Footer style={{background: "#C6E1F5", textAlign: 'center'}}>
                    <Link to={"/"}><button type='button' className='footer-button'>Voltar para tela inicial</button></Link>
                </Footer>
            </Layout>
        </Layout>
  
    )
}

export default DetailsPage