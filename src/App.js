import logo from './logo.svg';
import './App.css';
import GamePage from './views/home/index.js';
import MenuPage from './views/home/menu.js';
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MenuPage/>
     {/* <GamePage/> */}
       <Routes>
              <Route exact path='/' element={<MenuPage/>} />
              <Route path='/gamepage' element={<GamePage/>} />
        </Routes>
    </div>
  );
}

export default App;
