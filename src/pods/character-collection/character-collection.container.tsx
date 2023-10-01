import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { linkRoutes } from 'core/router';
import { useNavigate } from 'react-router-dom';

export const CharacterCollectionContainer = () => {
  const navigate = useNavigate();
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();

  React.useEffect(() => {
    loadCharacterCollection();
    console.log('character collection useEffect:', characterCollection);
  }, []);

  const handleCharacterDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id.toString()));
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onDetail={handleCharacterDetail}
    />
  );
};
