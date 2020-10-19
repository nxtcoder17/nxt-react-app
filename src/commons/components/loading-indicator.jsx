import React from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  indicator: {
    position: 'fixed',
    height: theme.spacing(0.8),
    width: '100vw',
    '& .MuiLinearProgress-bar': {
      borderRadius: '50%',
    },
  },
}));

export const LoadingIndicator = ({ when = false }) => {
  const classes = useStyles();
  if (!when) return <></>;
  return <LinearProgress color="primary" className={classes.indicator} />;
};
