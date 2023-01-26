import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TelaPrincipal from "./pages/telaPrincipal"
import Teste from "./pages/rotTeste1"
import Teste2 from "./pages/rotTeste2"

const App = ()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaPrincipal/>}></Route>
                <Route path="/teste1" element={<Teste/>}></Route>
                <Route path="/pikachu" element={<Teste2/>}></Route>
            </Routes>
        </Router>
    )
}

export default App