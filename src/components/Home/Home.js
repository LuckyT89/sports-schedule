import HomeCard from '../HomeCard/HomeCard';
import './Home.css';

function Home({ games }) {

    // For every game that is returned, create a HomeCard component with the 
    // information for that game
    const gameCards = games.map((game) => <HomeCard 
        key={game.id} 
        homeTeam={game.homeTeam} 
        awayTeam={game.awayTeam} 
        date = {game.date} 
        time = {game.time} 
        isCanceled = {game.isCanceled} />);

    return (
        <div className='home'>
            Home component
            {gameCards}
        </div>
    );
}

export default Home;