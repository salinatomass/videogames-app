import { Box } from '@mui/material';

import MainCard from './MainCard';

const GamesContainer = props => {
  const { gamesData } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      {gamesData.map(game => (
        <MainCard
          key={game.id}
          name={game.name}
          image={game.background_image}
          rating={game.rating}
        />
      ))}
    </Box>
  );
};

export default GamesContainer;
