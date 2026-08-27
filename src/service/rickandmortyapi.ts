const baseApiUrl = "https://rickandmortyapi.com/api";

const getRickandmortyCharacters = async (
  characterName: string,
  characterStatus: string,
  characterSpecie: string,
  characterType: string,
  characterGender: string,
) => {
  const apiUrlCharacters = `${baseApiUrl}/character/?name=${characterName}&status=${characterStatus}&species=${characterSpecie}&type=${characterType}&gender=${characterGender}`;

  return await fetch(apiUrlCharacters)
    .then((res) => res.json())
    .then((json) => json.results)
    .catch(() => {
      return;
    });
};

export { getRickandmortyCharacters };
