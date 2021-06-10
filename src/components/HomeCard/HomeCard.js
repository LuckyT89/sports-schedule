import './HomeCard.css';

function HomeCard({ homeTeam, awayTeam, date, time, isCanceled }) {
    return (
        <div className='home-card'>
            <p>{date}</p>
            <p>{time}</p>
            <p>{homeTeam} vs {awayTeam}</p>
        </div>
    );
}

export default HomeCard;