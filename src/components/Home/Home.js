import HomeCard from '../HomeCard/HomeCard';
import './Home.css';

function Home({ games }) {

    // For every game that is returned, create a HomeCard component and pass in 
    // an individual game object as a prop. 
    const homeCards = games.map((game) => <HomeCard key={game.id} game={game} />);

    return (
        <div className='home p-3 bg-dark'>
            {homeCards}
        </div>
    );
}

export default Home;