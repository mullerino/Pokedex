import {Layout} from 'antd';
import './index.css'
import { Link } from 'react-router-dom';
import { Pokemon } from '../../@types/pokemon';

interface IDetailsPage extends Pokemon{}

const { Header, Content, Footer } = Layout;

const DetailsPage = ({ name,num, img, egg, type, height, weight, weaknesses, spawn_chance, next_evolution } : IDetailsPage)=> {


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
                            </div>
                            <div className='details-info'>
                                <div className='info-card'>
                                    <div className='info-card-height'>
                                        <span>Height</span> 
                                        <span>{height}</span>
                                    </div>
                                    <div>
                                        <span>Weight</span> 
                                        <span>{weight}</span>
                                    </div>
                                    <div>
                                        <span>Egg</span> 
                                        <span>{egg}</span>
                                    </div>
                                    <div>
                                        <span>Next evolution</span> 
                                        {next_evolution.map(item =>{
                                            return(
                                                <span key={item.num}>{item.name}</span>
                                            )
                                        })}
                                    </div>
                                    <div>
                                        <span>Spawn chances</span> 
                                        <span>{spawn_chance}</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Content>
                <Footer style={{background: "#C6E1F5", textAlign: 'center'}}>
                    <Link to={"/"}><button type='button' className='footer-button'>Voltar</button></Link>
                </Footer>
            </Layout>
        </Layout>
  
    )
}

export default DetailsPage