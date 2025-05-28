import React, { useState } from 'react'
import CharacterList from './component/CharacterList';
import CharacterDetail from './component/CharacterDetail';
import './App.css'

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  return (
    
      <div className='App'>
        {!selectedCharacter ?(
          <CharacterList onSelectCharacter={setSelectedCharacter}/>
        ):(
          <div>
            <button className='btnvolver' onClick={()=> setSelectedCharacter(null)}>volver a la lista</button>
            <CharacterDetail characterId={selectedCharacter}/>
          </div>
        )}
      </div>


  );
}

export default App;
