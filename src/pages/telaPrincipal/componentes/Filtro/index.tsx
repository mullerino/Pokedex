import { Select } from 'antd';
import Atributos from './opcoes.json'

interface IFiltros{
    setAtributo: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Filtro = ({setAtributo}: IFiltros)=>{

    return (
        <div>
            <Select
            showSearch
            placeholder="Selecione um atributo"
            style={{ width: 170 }}
            onChange={(value) => setAtributo(value)}
            options={Atributos}
            />
        </div>
    )
}

export default Filtro