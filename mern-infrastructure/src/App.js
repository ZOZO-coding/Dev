import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// getUser utility method to return the user based on the token status(exist, expired, non-exist)
import { getUser } from './utilities/users-service';

// import pages
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

// import components
import NavBar from './components/NavBar';

function App() {

  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/orders/new' element=<NewOrderPage /> />
            <Route path='/orders' element=<OrderHistoryPage /> />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;
