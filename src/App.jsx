import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() 
{
  const resultado ="reactjs".toUpperCase()
  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex">
    <Formulario/>
    <hr/>
    <ListadoPacientes/>
    </div>
    </div>
  )
}

export default App
