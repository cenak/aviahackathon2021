import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import CompanyMenu from './CompanyMenu';
import ShowAllRequestsByCompany from './ShowAllRequestsByCompany';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    
  },
}));

export default function Company() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      

    <BrowserRouter>
      <Switch>
        
        {/*<Route exact path='/showrequest/:id' component={RequestDetails} />*/}

      </Switch>
    </BrowserRouter>

    </div>
  );
}
