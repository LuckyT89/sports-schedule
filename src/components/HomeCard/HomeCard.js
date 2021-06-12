import './HomeCard.css';
import bears from '../../img/bears.jpg';
import bulls from '../../img/bulls.jpg';
import eagles from '../../img/eagles.jpg';
import panthers from '../../img/panthers.jpg';
import rhinos from '../../img/rhinos.jpg';
import sharks from '../../img/sharks.jpg';
import tigers from '../../img/tigers.jpg';
import wolves from '../../img/wolves.jpg';


function HomeCard({ game }) {

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
            console.log('Home team does not match anything');
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
            console.log('Away team does not match anything');
    }


    return (
        <div className='home-card'>
            <p className='canceled'>{game.isCanceled ? 'This game has been canceled!' : '' }</p>
            <p>{game.date}</p>
            <p>{game.time}</p>
            <p><img src={selectedHomeTeam} alt='logo' /> vs. <img src={selectedAwayTeam} alt='logo' /></p>
        </div>
    );
}

export default HomeCard;