import './AdminForm.css';
import { useState } from 'react';

function AdminForm({ addGame }) {
    // Set starting state for form fields
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    // Update state when fields are changed
    function handleHomeChange(e) {
        setHomeTeam(e.target.value);
        console.log(`Testing: ${e.target.value}`);
    }
    function handleAwayChange(e) {
        setAwayTeam(e.target.value);
    }
    function handleDateChange(e) {
        setDate(e.target.value);
    }
    function handleTimeChange(e) {
        setTime(e.target.value);
    }

    // Create a game object from the field inputs when the Add button is clicked. Then pass this object 
    // to the addGames function which is called from App. 
    function handleAddGame(e) {
        e.preventDefault();
        const game = {
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            date: date,
            time: time,
            isCanceled: false
        };

        addGame(game);
    }

    return (
        <form className='admin-form bg-light  text-center'>
            <p className='h1 pt-3' >Add Game</p>
            
            <div className='align-div mx-auto text-start'>


                <select className='mb-3 mt-4' onChange={handleHomeChange} >
                    <option value='bears'>Bears</option>
                    <option value='bulls'>Bulls</option>
                    <option value='eagles'>Eagles</option>
                    <option value='panthers'>Panthers</option>
                    <option value='rhinos'>Rhinos</option>
                    <option value='sharks'>Sharks</option>
                    <option value='tigers'>Tigers</option>
                    <option value='wolves'>Wolves</option>
                </select>

                <span className="mx-2">vs.</span>

                <select onChange={handleAwayChange} >
                    <option value='bears'>Bears</option>
                    <option value='bulls'>Bulls</option>
                    <option value='eagles'>Eagles</option>
                    <option value='panthers'>Panthers</option>
                    <option value='rhinos'>Rhinos</option>
                    <option value='sharks'>Sharks</option>
                    <option value='tigers'>Tigers</option>
                    <option value='wolves'>Wolves</option>
                </select>

                <br />

                <input className='mb-3' type='text' placeholder='Date' onChange={handleDateChange} ></input><br />
                <input className='mb-3' type='text' placeholder='Time' onChange={handleTimeChange} ></input><br />
                
                <button className='btn btn-primary mb-3' type='submit' onClick={handleAddGame} >Add</button>

            </div>
        </form>
    );
}

export default AdminForm;