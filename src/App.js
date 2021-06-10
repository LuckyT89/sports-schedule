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


  // Send DELETE request for a game matching the id, then update state to filter out 
  // that game from the list that is displayed. 
  function removeGame(id) {
    console.log(`Remove game with id: ${id}`);
    fetch(`http://localhost:3000/games/${id}`, {method: 'DELETE'})
      .then(res => res.json())
      .then(() => setGames(games.filter(game => game.id !== id)))
  }


  function addGame(game) {
    console.log('Add game button was clicked');
    console.log(game);
    
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    };

    fetch('http://localhost:3000/games', config)
      .then(res => res.json())
      .then(game => setGames([...games, game]))
  }
  

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home games={games}/>
        </Route>

        <Route exact path='/admin'>
          <Admin games={games} removeGame={removeGame} addGame={addGame} />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
