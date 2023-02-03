
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Ingrida } from './pages/Ingrida';
import { Daiva } from './pages/Daiva';
import { Mantas } from './pages/Mantas';
import { Mantvydas } from './pages/Mantvydas';
import { Vladislav } from './pages/Vladislav';
import { Vilmantas } from './pages/Vilmantas';
import { Menu } from './pages/Menu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <HashRouter> 
      <Menu />       
        <Routes>                         
          <Route path='/ingrida' element={<Ingrida />} />
          <Route path='/mantas' element={<Mantas />}/>
          <Route path='/mantvydas' element={<Mantvydas />} />
          <Route path='/daiva' element={<Daiva />} />
          <Route path='/vilmantas' element={<Vilmantas />} />
          <Route path='/vladislav' element={<Vladislav />} />  
        </Routes>
      </HashRouter>         
    </div>
  );
}

export default App;
