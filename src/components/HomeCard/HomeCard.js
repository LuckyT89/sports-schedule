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
    return (
        <div className='home-card'>
            <p className='canceled'>{game.isCanceled ? 'This game has been canceled!' : '' }</p>
            <p>{game.date}</p>
            <p>{game.time}</p>
            <p>{game.homeTeam} vs {game.awayTeam}</p>
            <p><img src={tigers} alt='logo' /> Vs. <img src={wolves} alt='logo' /></p>
        </div>
    );
}

export default HomeCard;