import { useState, useEffect } from 'react';

const BASE_API = 'https://api.rawg.io/api/games';

const useVideogames = () => {
  const [gamesData, setGamesData] = useState({
    previous: null,
    next: '',
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getVideogames(`${BASE_API}?key=8b14a42837b34668b47e1607e11a0da9&page=1`);
  }, []);

  const getVideogames = async url => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setGamesData({
        previous: data.previous,
        next: data.next,
        results: data.results,
      });
      setIsLoading(false);
      // console.log('Games data from API...', data);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return { gamesData, getVideogames, isLoading };
};

export default useVideogames;
