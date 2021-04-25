import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Plane from './Plane/Plane';
import Company from './Company/Company';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PlaneMenu from './Plane/PlaneMenu';
import ChooseRequest from './Plane/ChooseRequest';
import ShowAllRequests from './Plane/ShowAllRequests';
import CreateRequest from './Plane/CreateRequest';
import RequestDetails from './Plane/RequestDetails';

import CompanyMenu from './Company/CompanyMenu';
import ShowAllRequestsByCompany from './Company/ShowAllRequestsByCompany';
import ShowRequestByCompany from './Company/ShowRequestByCompany';
import ShowRevisionRequestByCompany from './Company/ShowRevisionRequestsByCompany';

import AirportMenu from './Airport/AirportMenu';
import ShowAllRequestsByAirport from './Airport/ShowAllRequestsByAirport';
import ShowRequestByAirport from './Airport/ShowRequestByAirport';
import ShowRevisionRequestByAirport from './Airport/ShowRevisionRequestsByAirport';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    //width: '100%',
    overflow: 'auto',
    margin: 15,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    //padding: 4,
  },
  fixedHeight: {
    height: 240,
  },
  roleChoice: {
      margin: 5,
  },
}));

export default function Panel(props) {

  console.log(props.location);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(JSON.stringify(props.location));


  //const [userRole, setUserRole] = React.useState('plane');
  const [userRole, setUserRole] = React.useState('s');

  const handleChangeUserRole = (event) => {
    window.open(`/${event.target.value}`, "_self");
    setUserRole(event.target.value);
  };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Система сбора обработки заявок от авиакомпаний
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <FormControl component="fieldset" className={classes.roleChoice}>
            <FormLabel component="legend">Роль</FormLabel>
            <RadioGroup aria-label="role" name="role1" value={userRole} onChange={handleChangeUserRole}>
                <FormControlLabel value="plane" control={<Radio />} label="Человек на самолете" />
                <FormControlLabel value="company" control={<Radio />} label="Авиакомпания" />
                <FormControlLabel value="airport" control={<Radio />} label="Аэропорт" />
            </RadioGroup>
        </FormControl>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        { userRole === "plane" && <Plane /> }
        { userRole === "company" && <Company /> }
        {/* userRole === "airport" && <p>airport</p> */}
        

        <BrowserRouter>
          <Switch>
            <Route exact path='/plane' component={PlaneMenu} />
            <Route exact path='/plane/createrequest' component={ChooseRequest} />
            <Route exact path='/plane/createrequest/:id' component={CreateRequest} />
            <Route exact path='/plane/showrequest' component={ShowAllRequests} />
            <Route exact path='/plane/showrequest/:id' component={RequestDetails} />
            <Route exact path='/plane/editrequest/:id' component={RequestDetails} />


            <Route exact path='/company' component={CompanyMenu} />
            {/*<Route exact path='/createrequest/:id' component={CreateRequest} />*/}
            <Route exact path='/company/showrequest' component={ShowAllRequestsByCompany} />
            <Route exact path='/company/showrevisionrequest' component={ShowRevisionRequestByCompany} />
            <Route exact path='/company/showrequest/:id' component={ShowRequestByCompany} />

            <Route exact path='/airport' component={AirportMenu} />
            {/*<Route exact path='/createrequest' component={ChooseRequest} />
            <Route exact path='/createrequest/:id' component={CreateRequest} />*/}
            <Route exact path='/airport/showrequest' component={ShowAllRequestsByAirport} />
            <Route exact path='/airport/showrequest/:id' component={ShowRequestByAirport} />
            <Route exact path='/airport/showrevisionrequest' component={ShowRevisionRequestByAirport} />

          </Switch>
        </BrowserRouter>

      </main>
    </div>
  );
}