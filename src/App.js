import Navbar from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  const baseURL = 'https://sports-schedule-backend.herokuapp.com';

  const [games, setGames] = useState([]);
  
  // Initial GET request to grab all the games and set state
  useEffect(() => {
    fetch(`${baseURL}/games`)
      .then(res => res.json())
      .then(resGames => {
        setGames(resGames);
      })
  }, []);


  // Send DELETE request for a game matching the id, then update state to filter out 
  // that game from the list that is displayed. 
  function removeGame(id) {
    fetch(`${baseURL}/games/${id}`, {method: 'DELETE'})
      .then(res => res.json())
      .then(() => setGames(games.filter(game => game.id !== id)))
  }


  // Make a POST request to add a new game to the database. This takes a game object which was made from 
  // the user input of the AdminForm component. After the request, the state is also updated to show this 
  // new game added to the page. 
  function addGame(game) {

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(game)
    };

    fetch(`${baseURL}/games`, config)
      .then(res => res.json())
      .then(game => setGames([...games, game]))
  }


  // Make a PATCH request to toggle if a game is canceled or not, also update state 
  // to display the change
  function cancelGame(updatedGame) {
    const config = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedGame)
    }

    fetch(`${baseURL}/games/${updatedGame.id}`, config)
      .then(res => res.json())
      .then((newGame) => {
        // Create a new variable with a list of all games, updating the one that just 
        // had the cancel status toggled. 
        const updatedGames = games.map((game) => {
          if (game.id === newGame.id) {
            return newGame;
          }
          else {
            return game;
          }
        });

        setGames(updatedGames);
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
