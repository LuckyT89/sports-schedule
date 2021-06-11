import './AdminCard.css';
import bears from '../../img/bears.jpg';
import bulls from '../../img/bulls.jpg';
import eagles from '../../img/eagles.jpg';
import panthers from '../../img/panthers.jpg';
import rhinos from '../../img/rhinos.jpg';
import sharks from '../../img/sharks.jpg';
import tigers from '../../img/tigers.jpg';
import wolves from '../../img/wolves.jpg';
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
            <p><img src={tigers} alt='logo' /> Vs. <img src={wolves} alt='logo' /></p>
            <button onClick={handleRemoveGame} >Remove</button>
            <label>Mark canceled<input type='checkbox' checked={cancelStatus ? 'checked' : ''} onChange={handleCanceled} ></input></label>
            <p className='canceled'>This game is {game.isCanceled ? "canceled" : "NOT canceled"} </p>
        </div>
    );
}

export default AdminCard;