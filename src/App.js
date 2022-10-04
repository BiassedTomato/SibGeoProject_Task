import logo from './logo.svg';
import './App.css';
import { Map } from './components/map.jsx'
import { MapComponent } from './components/map';
import {FavouritesTab} from './components/tab';

function App() {
  return (
    <div className="App">
      <MapComponent />
      <FavouritesTab/>
    </div>
  );
}

export default App;
