import { Input, Space } from 'antd';
import './index.css'

const { Search } = Input;

interface CampoTextProps{
    buscarPokemons: (textoInput: string) => void;
}

const CampoText = ({buscarPokemons}: CampoTextProps): JSX.Element =>{
    
    return ( 
        <div className='search_poke'>
            <Search placeholder="Digite o nome do Pokemon" onSearch={(text)=>buscarPokemons(text)} enterButton style={{ width: 250 }}/>
        </div>
    )
}

export default CampoText