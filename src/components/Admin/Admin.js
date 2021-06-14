import AdminCard from '../AdminCard/AdminCard';
import AdminForm from '../AdminForm/AdminForm';
import './Admin.css';

function Admin({ games, removeGame, cancelGame, addGame }) {

    // For every game that is returned, create an AdminCard component and pass in 
    // an individual game object as a prop along with the functions needed for AdminCards. 
    const adminCards = games.map((game) => <AdminCard 
        key={game.id} 
        game={game} 
        removeGame={removeGame}
        cancelGame={cancelGame} />);

    return (
        <div className='admin pb-3 bg-dark'>
            <AdminForm addGame={addGame} />
            {adminCards}
        </div>
    );
}

export default Admin;