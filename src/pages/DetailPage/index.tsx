import {Layout} from 'antd';
import './index.css'
import { Link } from 'react-router-dom';

interface IDetailsPage{
    name: string;
    num: string;
}

const { Header, Content, Footer } = Layout;

const DetailsPage = ({name,num} : IDetailsPage)=> {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: "#C6E1F5" }} />
                <Content className='content_container'>
                    <div className='content'>
                        <section >
                            <h2>{name}</h2>
                            <span>Nº{num}</span>
                        </section>
                        <section>

                        </section>
                    </div>
                </Content>
                <Footer style={{background: "#C6E1F5", textAlign: 'center'}}>
                    <Link to={"/"}><button type='button'>Voltar</button></Link>
                </Footer>
            </Layout>
        </Layout>
  
    )
}

export default DetailsPage