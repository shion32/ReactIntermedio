import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CharacterList = ({ onSelectCharacter }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {setCharacters(response.data.results)})
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Personajes Rick y Morty</h1>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'burlywood' }}>
        {characters.map((char) => (
          <div key={char.id} onClick={() => onSelectCharacter(char.id)}
            style={{ margin: '10px', cursor: 'pointer' }}>
            <img src={char.image} alt={char.name} />
            <p>{char.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;