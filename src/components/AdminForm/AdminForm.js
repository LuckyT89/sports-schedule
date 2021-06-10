import './AdminForm.css';

function AdminForm() {
    return (
        <div className='admin-form'>
            <input type='text' placeholder='Home Team' ></input><br />
            <input type='text' placeholder='Away Team' ></input><br />
            <button>Add</button>
        </div>
    );
}

export default AdminForm;