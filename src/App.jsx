import './main.css'
import { BrowserRouter } from 'react-router-dom';
import Rotas from './pages/Rotas.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App