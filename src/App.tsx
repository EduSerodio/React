import Card from "./components/card/Card"
import Contador from "./components/contador/Contador"
import Tarefa from "./components/tarefa/Tarefa"

function App() {
    return (
        <>
            <Card titulo={"C shrap"} descricao={"Linguagem de programação"} />
            <Contador/>
            <Tarefa/>
        </>
    )
}

export default App
