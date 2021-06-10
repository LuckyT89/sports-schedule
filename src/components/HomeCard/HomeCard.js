import './HomeCard.css';

function HomeCard({ game }) {
    return (
        <div className='home-card'>
            <p>{game.date}</p>
            <p>{game.time}</p>
            <p>{game.homeTeam} vs {game.awayTeam}</p>
        </div>
    );
}

export default HomeCard;