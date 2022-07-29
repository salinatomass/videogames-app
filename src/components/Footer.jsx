import { Box, Button, Typography, Link } from '@mui/material';

const Footer = ({ previous, next, updateGames }) => {
  console.log(previous);
  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '40px',
        backgroundColor: 'white',
        padding: '80px 20px 40px',
        borderRadius: '20px 20px 0 0 ',
      }}
    >
      <Button
        size="medium"
        variant={!previous ? 'text' : 'contained'}
        disabled={!previous}
        onClick={() => updateGames(previous)}
      >
        Previous
      </Button>
      <Typography
        variant="body1"
        sx={{
          display: 'inline',
          margin: '0 10px',
        }}
      >
        {!previous ? 'Page 1' : `Page ${Number(next.substr(-1)) - 1}`}
      </Typography>
      <Button
        size="medium"
        variant={!next ? 'text' : 'contained'}
        disabled={!next}
        onClick={() => updateGames(next)}
      >
        Next
      </Button>
      <Typography
        sx={{
          marginTop: '40px',
          color: '#15133C',
        }}
      >
        <Link
          href="https://github.com/salinatomass"
          target="_blank"
          color="inherit"
          rel="noreferrer"
        >
          Made by @salinatomass
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
