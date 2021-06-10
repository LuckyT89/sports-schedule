import './AdminCard.css';

function AdminCard({ game, removeGame }) {

    function handleRemoveGame() {
        removeGame(game.id);
    }

    return (
        <div className='admin-card'>
            <p>{game.date}</p>
            <p>{game.time}</p>
            <p>{game.homeTeam} vs {game.awayTeam}</p>
            <button onClick={handleRemoveGame} >Delete</button>
            <button>Canceled</button>
        </div>
    );
}

export default AdminCard;