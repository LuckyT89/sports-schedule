import AdminCard from '../AdminCard/AdminCard';
import './Admin.css';

function Admin({ games }) {

    // For every game that is returned, create an AdminCard component with the 
    // information for that game
    const adminCards = games.map((game) => <AdminCard 
        key={game.id} 
        homeTeam={game.homeTeam} 
        awayTeam={game.awayTeam} 
        date = {game.date} 
        time = {game.time} 
        isCanceled = {game.isCanceled} />);

    return (
        <div className='admin'>
            Admin component
            {adminCards}
        </div>
    );
}

export default Admin;