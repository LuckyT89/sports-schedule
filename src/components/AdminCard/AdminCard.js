import './AdminCard.css';

function AdminCard({ game, removeGame }) {

    function handleRemoveGame() {
        removeGame(game.id);
    }

    function handleCanceled() {
        console.log('toggle that!');
    }

    return (
        <div className='admin-card'>
            <p>{game.date}</p>
            <p>{game.time}</p>
            <p>{game.homeTeam} vs {game.awayTeam}</p>
            <button onClick={handleRemoveGame} >Remove</button>
            <label>Mark canceled<input type='checkbox' checked={game.isCanceled ? 'checked' : ''} onChange={handleCanceled} ></input></label>
            <p>This game is {game.isCanceled ? "canceled" : "NOT canceled"} </p>
        </div>
    );
}

export default AdminCard;