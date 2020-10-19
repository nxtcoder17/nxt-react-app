import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#2679fa',
    },
    secondary: {
      main: '#3b6978',
    },
  },
  typography: {
    fontFamily: ['Lato', 'Dancing Script'].join(','),
  },
});
