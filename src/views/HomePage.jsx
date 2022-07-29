import useVideogames from '../hooks/useVideogames';

import Loading from '../components/Loading';
import Title from '../components/Title';
import Footer from '../components/Footer';
import GamesContainer from '../components/GamesContainer';

export default function HomePage() {
  const { gamesData, getVideogames, isLoading } = useVideogames();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#161616',
        padding: '40px 20px 0',
      }}
    >
      <Title />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <GamesContainer gamesData={gamesData.results} />
          <Footer
            previous={gamesData.previous}
            next={gamesData.next}
            updateGames={getVideogames}
          />
        </>
      )}
    </div>
  );
}
