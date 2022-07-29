import React from 'react';
import { Typography } from '@mui/material';

const Title = () => {
  return (
    <Typography
      variant="h4"
      align="center"
      sx={{
        fontFamily: 'Bungee Outline',
        fontWeight: 'bold',
        color: 'yellow',
        backgroundColor: 'blue',
        width: '35%',
        minWidth: 'fit-content',
        borderRadius: '8px',
        marginBottom: '40px',
      }}
    >
      Platzi Gaming Arcade
    </Typography>
  );
};

export default Title;
