import './AdminCard.css';

function AdminCard({ homeTeam, awayTeam, date, time, isCanceled }) {
    return (
        <div className='admin-card'>
            <p>{date}</p>
            <p>{time}</p>
            <p>{homeTeam} vs {awayTeam}</p>
            <button>Delete</button>
            <button>Canceled</button>
        </div>
    );
}

export default AdminCard;