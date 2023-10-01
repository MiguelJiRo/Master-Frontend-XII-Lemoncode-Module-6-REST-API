import { Character} from "./character.api-model";

const url = `/api/character`;

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const fetchUrl = url + '/' + id;
    return await fetch(fetchUrl).then(
      response => response.json()
    ).catch((error) => {
      console.error("Error fetching members: ", error);
    });
  } catch (error) {
    console.error("Error fetching character/s: ", error);
  }
}