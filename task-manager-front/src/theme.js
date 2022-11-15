import React from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f0f0f',
    },
    primary: {
      main: '#f36161',
    },
  },
});

export default theme;
