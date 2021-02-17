import { makeStyles } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'black !important',
  },
  success: {
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    color: ` white !important`,
    border: `2px solid antiquewhite`,
    borderRadius: '10px',
  },
}));

export const NotistackProvider = ({ children }) => {
  const classes = useStyles();
  return (
    <SnackbarProvider
      classes={{
        contentRoot: classes.root,
        variantSuccess: classes.success,
      }}
      maxSnack={3}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'top',
      }}
      preventDuplicate
      autoHideDuration={3000}
      dense
    >
      {children}
    </SnackbarProvider>
  );
};
