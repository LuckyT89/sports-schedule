import HomeCard from '../HomeCard/HomeCard';
import './Home.css';

function Home({ games }) {

    // For every game that is returned, create a HomeCard component with the 
    // information for that game
    const homeCards = games.map((game) => <HomeCard 
        key={game.id} 
        homeTeam={game.homeTeam} 
        awayTeam={game.awayTeam} 
        date = {game.date} 
        time = {game.time} 
        isCanceled = {game.isCanceled} />);

    return (
        <div className='home'>
            Home component
            {homeCards}
        </div>
    );
}

export default Home;