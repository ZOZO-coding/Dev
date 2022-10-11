import { Routes, Route } from 'react-router-dom';
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import NavBar from './components/NavBar'


function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price/:symbol' element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
