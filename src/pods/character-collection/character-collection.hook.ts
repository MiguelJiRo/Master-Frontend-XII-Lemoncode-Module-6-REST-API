import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
    {
      // const { info, results } = result;
      console.log('character collection result 1#:', result);
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    }).catch(
      error => {
        console.log('Error getting character collection:', error);
        setCharacterCollection([]);
      }
    );
  };

  return { characterCollection, loadCharacterCollection };
};
