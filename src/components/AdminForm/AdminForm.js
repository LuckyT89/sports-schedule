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
        <div className='admin-form'>
            {/* <input type='text' placeholder='Home Team' onChange={handleHomeChange} ></input><br /> */}

            <select onChange={handleHomeChange} >
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

            {/* <input type='text' placeholder='Away Team' onChange={handleAwayChange} ></input><br /> */}

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

            <input type='text' placeholder='Date' onChange={handleDateChange} ></input><br />
            <input type='text' placeholder='Time' onChange={handleTimeChange} ></input><br />
            <button type='submit' onClick={handleAddGame} >Add</button>
        </div>
    );
}

export default AdminForm;