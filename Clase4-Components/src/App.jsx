import './App.css'
import Card from './Components/Card'
import Saludo from './Components/Saludo'



function App() {


  return (
    <>
    <article className='tarea-play'>
      <Saludo nombre="Andrea">Hola que tal</Saludo>
    </article>

    

    <article className='tarea-prof'>
      <Card>Tarjeta hijo</Card>

      <Card title="Titlo de la tarjeta"> Tarjeta hijo</Card>

      <Card footer="Pie del Hijo"> Tarjeta hijo</Card>

      <Card title="Titlo de la tarjeta" footer="Pie del Hijo"> Tarjeta hijo</Card>
    </article>
    </>
    
  )
}

export default App
