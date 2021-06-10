import Navbar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {

  const [games, setGames] = useState([]);
  
  // Initial GET request to grab all the games and set state
  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(res => res.json())
      .then(resGames => {
        setGames(resGames);
      })
  }, []);

  

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home games={games}/>
        </Route>

        <Route exact path='/admin'>
          <Admin games={games} />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
