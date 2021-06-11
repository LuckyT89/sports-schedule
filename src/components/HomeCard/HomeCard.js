import './HomeCard.css';
import bears from '../../img/bulls.jpg';

function HomeCard({ game }) {
    return (
        <div className='home-card'>
            <p className='canceled'>{game.isCanceled ? 'This game has been canceled!' : '' }</p>
            <p>{game.date}</p>
            <p>{game.time}</p>
            <p>{game.homeTeam} vs {game.awayTeam}</p>
            <img src={bears} alt='logo' />
        </div>
    );
}

export default HomeCard;