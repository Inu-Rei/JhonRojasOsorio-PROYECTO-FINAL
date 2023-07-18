import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Inicio from './components/inicio';
import Personaje from './components/personaje';
import './index.css';

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;