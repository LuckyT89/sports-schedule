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


  // Make a POST request to add a new game to the database. This takes a game object which was made from 
  // the user input of the AdminForm component. After the request, the state is also updated to show this 
  // new game added to the page. 
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


  // Cancel game checkbox functionality
  function cancelGame(updatedGame) {
    const config = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedGame)
    }

    fetch(`http://localhost:3000/games/${updatedGame.id}`, config)
      .then(res => res.json())
      .then((newGame) => {
        console.log(newGame);
      })
  }
  


  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home games={games}/>
        </Route>

        <Route exact path='/admin'>
          <Admin games={games} removeGame={removeGame} cancelGame={cancelGame} addGame={addGame} />
        </Route>  
      </Switch>
    </div>
  );
}

export default App;
