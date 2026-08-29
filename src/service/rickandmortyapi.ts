import type { CharacterApiResponse } from "../interface/characterType";

const baseApiUrl = "https://rickandmortyapi.com/api";

const getRickandmortyCharacters = async (
  characterName: string,
  characterStatus: string,
  characterSpecie: string,
  characterType: string,
  characterGender: string,
  page = 1,
): Promise<CharacterApiResponse | undefined> => {
  const params = new URLSearchParams({
    page: String(page),
  });

  const filters = {
    name: characterName,
    status: characterStatus,
    species: characterSpecie,
    type: characterType,
    gender: characterGender,
  };

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.append(key, value);
    }
  });

  const apiUrlCharacters = `${baseApiUrl}/character/?${params.toString()}`;

  return await fetch(apiUrlCharacters)
    .then((res) => res.json() as Promise<CharacterApiResponse>)
    .catch(() => {
      return undefined;
    });
};

export { getRickandmortyCharacters };
