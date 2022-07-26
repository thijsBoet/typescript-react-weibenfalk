import React, { useEffect, useRef, useState } from 'react';

// Api
import { fetchCharacter } from './api';
// Types
import { Character } from './api';
// Styles
import { Wrapper } from './App.styles';
// Components
import Card from './components/Card';
import Item from './components/Item';
//  Context Hook
import { useCharacterId } from './context';

const App: React.FC = () => {
  const [character, setCharacter] = useState<Character>({} as Character);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [characterId, setCharacterId] = useState<number>(1);
  const { characterId, setCharacterId } = useCharacterId();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };
    fetchFromApi();
  }, [characterId]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // if (typeof inputRef.current?.value !== 'number') alert('Please enter a number');
    e.preventDefault();
    setCharacterId(Number(inputRef.current?.value));
  };

  return (
    <Wrapper characterId={characterId}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Card
            name={character.name}
            imgUrl={character.img_url}
            gender={character.gender}
          />
          <Item item={character} onClick={(item) => console.log(item.origin)} />
          <input type="number" ref={inputRef} />
          <button onClick={handleButtonClick}>Get Character</button>
        </>
      )}
    </Wrapper>
  );
};

export default App;
