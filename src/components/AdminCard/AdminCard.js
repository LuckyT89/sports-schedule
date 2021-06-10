import './AdminCard.css';

function AdminCard({ id, homeTeam, awayTeam, date, time, isCanceled, removeGame }) {

    function handleRemoveGame() {
        removeGame(id);
    }

    return (
        <div className='admin-card'>
            <p>{date}</p>
            <p>{time}</p>
            <p>{homeTeam} vs {awayTeam}</p>
            <button onClick={handleRemoveGame} >Delete</button>
            <button>Canceled</button>
        </div>
    );
}

export default AdminCard;