import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  }, []);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
      <div className="character-list">
        {filteredCharacters.map(character => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
