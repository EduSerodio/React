import Card from "./components/card/Card"
import Contador from "./components/contador/Contador"
import Tarefa from "./components/tarefa/Tarefa"

import Home from "./pages/home/Home"

function App() {
    return (
        <>
            <Card titulo={"C shrap"} descricao={"Linguagem de programação"} />
            <Contador/>
            <Tarefa/>
            <Home/>
        </>
    )
}

export default App
