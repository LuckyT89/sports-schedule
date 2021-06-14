import HomeCard from '../HomeCard/HomeCard';
import './Home.css';

function Home({ games }) {

    // For every game that is returned, create a HomeCard component and pass in 
    // an individual game object as a prop. 
    const homeCards = games.map((game) => <HomeCard key={game.id} game={game} />);

    return (
        <div className='home p-3 bg-dark'>
            {homeCards}
            <a href="https://www.freepik.com/vectors/badge">Badge vector created by macrovector</a>
            <a href='https://www.freepik.com/vectors/star'>Star vector created by macrovector</a>
            <a href='https://www.freepik.com/vectors/logo'>Logo vector created by freepik</a>
        </div>
    );
}

export default Home;