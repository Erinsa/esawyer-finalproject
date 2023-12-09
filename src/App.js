import logo from './logo.svg';
import './App.css';
import GamePage from './views/home/index.js';
import MenuPage from './views/home/menu.js';
import MusicPlayer from './views/home/music.js';
import Home from './views/home/Home.js';
import { Routes, Route, HashRouter, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <MenuPage/>
    //  {/* <GamePage/> */}
    //    <Routes>
    //           <Route exact path='/' element={<MenuPage/>} />
    //           <Route path='/gamepage' element={<GamePage/>} />
    //           <Route path = '/esawyer-finalproject' element={<MenuPage/>} />
    //     </Routes>
    // </div>
    <>
    <Router basename={process.env.PUBLIC_URL}>
                  <Routes>
                      {/* <Route path='/' element={<Home />} /> */}
                      <Route path='/' element={<MenuPage />} />
                      <Route path='/gamepage' element={<GamePage />} />
                      <Route path='/menupage' element={<MenuPage />} />
                  </Routes>
        </Router>
        <MusicPlayer />
      </>
  );
}

export default App;
