import './AdminForm.css';
import { useState } from 'react';

function AdminForm({ addGame }) {
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    function handleHomeChange(e) {
        setHomeTeam(e.target.value);
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

    function handleAddGame() {
        console.log(`The ${homeTeam} will play the ${awayTeam} on ${date} at ${time}!!!`);
        addGame();
    }

    return (
        <div className='admin-form'>
            <input type='text' placeholder='Home Team' onChange={handleHomeChange} ></input><br />
            <input type='text' placeholder='Away Team' onChange={handleAwayChange} ></input><br />
            <input type='text' placeholder='Date' onChange={handleDateChange} ></input><br />
            <input type='text' placeholder='Time' onChange={handleTimeChange} ></input><br />
            <button onClick={handleAddGame} >Add</button>
        </div>
    );
}

export default AdminForm;