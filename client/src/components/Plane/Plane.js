import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import PlaneMenu from './PlaneMenu';
import ChooseRequest from './ChooseRequest';
import ShowAllRequests from './ShowAllRequests';
import CreateRequest from './CreateRequest';
import RequestDetails from './RequestDetails';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    
  },
}));

export default function Plane() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      

    

    </div>
  );
}
