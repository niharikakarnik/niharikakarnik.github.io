
import './App.css';
import typewriter from '@marcreichel/alpine-typewriter';
import Alpine from 'alpinejs';

Alpine.plugin(typewriter);
Alpine.start();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span x-data="{ texts: ['Welcome to my website', 'Good to see you here'] }" x-typewriter="texts"></span>
      </header>
    </div>
  );
}

export default App;
