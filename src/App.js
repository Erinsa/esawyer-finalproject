// General References:


// Accesibility:

// Reference for using WAVE tool browser extension on local files:
// https://stackoverflow.com/questions/32869424/inspecting-local-html-files-using-wave-tool

// Reference for WAVE tool browser extension:
// https://wave.webaim.org/extension/

// React Refernce:
// https://legacy.reactjs.org/docs/accessibility.html


// React Router

// Basic References for React Router:
// https://www.freecodecamp.org/news/how-to-use-react-router-version-6/
// https://www.w3schools.com/react/react_router.asp
// https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/
// https://reactrouter.com/en/main
// https://stackoverflow.com/questions/72376545/what-is-the-difference-between-element-attribute-and-component-attribute-in-reac

// Debugging References for React Router:
// Used a variety of the tips here for help with gh pages and react-router:
// https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
// Used this person's working react routed gh pages repo as a reference for debugging (found through above link)
// https://github.com/umair-mirza/safetyapp/tree/main 



import logo from './logo.svg';
import './App.css';
import KanjiGamePage from './views/home/kanjigamepage.js';
import MenuPage from './views/home/menu.js';
import HiraganaGamePage from './views/home/hiraganagamepage.js';
import KatakanaGamePage from './views/home/katakanagamepage.js';
import MusicPlayer from './views/home/music.js';
import Home from './views/home/Home.js';
import { Routes, Route, HashRouter, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
      {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter basename="/esawyer-finalproject" hashType="hashbang">
          <Routes>
              <Route path='/' element={<MenuPage />} />
              <Route path='/gamepage' element={<KanjiGamePage />} />
              <Route path='/menupage' element={<MenuPage />} />
              <Route path='/hiraganagamepage' element={<HiraganaGamePage />} />
              <Route path='/katakanagamepage' element={<KatakanaGamePage />} />
          </Routes>
        </HashRouter>
        <MusicPlayer />
    </>
  );
}

export default App;
