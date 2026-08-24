const baseApiUrl = "https://rickandmortyapi.com/api";

const getRickandmortyCharacters = async (
  characterName: string,
  characterStatus: string,
): Promise<void> => {
  const apiUrlCharacters = `${baseApiUrl}/character/?name=${characterName}&status=${characterStatus}`;

  return await fetch(apiUrlCharacters)
    .then((res) => res.json())
    .catch(() => {
      return;
    });
};

export { getRickandmortyCharacters };
