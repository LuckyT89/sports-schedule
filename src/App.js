import './App.css';
import Admin from './components/Admin/Admin';
import AdminCard from './components/AdminCard/AdminCard';
import Home from './components/Home/Home';
import HomeCard from './components/HomeCard/HomeCard';

function App() {
  return (
    <div>
      <Home />
      <HomeCard />
      <Admin />
      <AdminCard />
    </div>
  );
}

export default App;
