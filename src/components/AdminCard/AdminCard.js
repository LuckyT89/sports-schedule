import './AdminCard.css';
import { useState, } from 'react';


function AdminCard({ game, removeGame, cancelGame }) {
    const [cancelStatus, setCancelStatus] = useState(game.isCanceled)

    function handleRemoveGame() {
        removeGame(game.id);
    }

    function handleCanceled() {
        console.log(`This game is oringinally: ${cancelStatus}`);
        
        const updatedGame = {
            id: game.id,
            homeTeam: game.homeTeam,
            awayTeam: game.awayTeam,
            date: game.date,
            time: game.time,
            isCanceled: !cancelStatus
        }
        
        setCancelStatus((currentStatus) => !currentStatus)
        
        cancelGame(updatedGame);
    }


    return (
        <div className='admin-card'>
            <p>{game.date}</p>
            <p>{game.time}</p>
            <p>{game.homeTeam} vs {game.awayTeam}</p>
            <button onClick={handleRemoveGame} >Remove</button>
            <label>Mark canceled<input type='checkbox' checked={cancelStatus ? 'checked' : ''} onChange={handleCanceled} ></input></label>
            <p>This game is {game.isCanceled ? "canceled" : "NOT canceled"} </p>
        </div>
    );
}

export default AdminCard;