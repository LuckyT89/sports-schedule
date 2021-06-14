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


    // Assign a variable the correct logo image based on who the home team is. SelectedHomeTeam will be used 
    // as the src attribute in the image tag. 
    let selectedHomeTeam;
    switch (game.homeTeam) {
        case 'bears':
            selectedHomeTeam = bears;
            break;
        case 'bulls':
            selectedHomeTeam = bulls;
            break;
        case 'eagles':
            selectedHomeTeam = eagles;
            break;
        case 'panthers':
            selectedHomeTeam = panthers;
            break;
        case 'rhinos':
            selectedHomeTeam = rhinos;
            break;
        case 'sharks':
            selectedHomeTeam = sharks;
            break;
        case 'tigers':
            selectedHomeTeam = tigers;
            break;
        case 'wolves':
            selectedHomeTeam = wolves;
            break;
        default:
            console.log('not set to anything');
    }

    // Assign a variable the correct logo image based on who the away team is. SelectedAwayTeam will be used 
    // as the src attribute in the image tag. 
    let selectedAwayTeam;
    switch (game.awayTeam) {
        case 'bears':
            selectedAwayTeam = bears;
            break;
        case 'bulls':
            selectedAwayTeam = bulls;
            break;
        case 'eagles':
            selectedAwayTeam = eagles;
            break;
        case 'panthers':
            selectedAwayTeam = panthers;
            break;
        case 'rhinos':
            selectedAwayTeam = rhinos;
            break;
        case 'sharks':
            selectedAwayTeam = sharks;
            break;
        case 'tigers':
            selectedAwayTeam = tigers;
            break;
        case 'wolves':
            selectedAwayTeam = wolves;
            break;
        default:
            console.log('not set to anything');
    }


    return (
        <div className='admin-card card m-5 mx-auto'>
            <div className='card-body text-center'>
                <h5 className='card-title'>{game.date}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{game.time}</h6>
                <p><img src={selectedHomeTeam} alt='logo' /> vs. <img src={selectedAwayTeam} alt='logo' /></p>
                <button className='btn btn-danger me-5' onClick={handleRemoveGame} >Remove</button>

                {/* <label>Mark canceled<input className='form-check-input' type='checkbox' checked={cancelStatus ? 'checked' : ''} onChange={handleCanceled} ></input></label> */}

                
                <span className='text-muted'>Canceled</span>
                <label className="switch ms-1">
                    <input type="checkbox" checked={cancelStatus ? 'checked' : ''} onChange={handleCanceled}/>
                    <span className="slider round"></span>
                </label>
                
            </div>
        </div>
    );
}

export default AdminCard;