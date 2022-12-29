import { Input, Space } from 'antd';
import './index.css'
import { useState } from 'react';

const { Search } = Input;

interface CampoTextProps{
    buscarPokemons: (textoInput: string) => void;
}

const CampoText = ({buscarPokemons}: CampoTextProps): JSX.Element =>{

    return (
        <div className='search_poke'>
            <Search placeholder="Digite o nome do Pokemon" onChange={e => buscarPokemons(e.target.value)} enterButton />
        </div>
    )
}

export default CampoText