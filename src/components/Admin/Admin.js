import AdminCard from '../AdminCard/AdminCard';
import AdminForm from '../AdminForm/AdminForm';
import './Admin.css';

function Admin({ games, removeGame }) {

    // For every game that is returned, create an AdminCard component and pass in 
    // an individual game object as a prop along with the functions needed for AdminCards. 
    const adminCards = games.map((game) => <AdminCard 
        key={game.id} 
        game={game} 
        removeGame={removeGame} />);

    return (
        <div className='admin'>
            Admin component
            <AdminForm />
            {adminCards}
        </div>
    );
}

export default Admin;