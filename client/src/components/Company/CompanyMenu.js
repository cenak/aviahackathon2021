import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    
    padding: 15,
  },
}));

export default function CompanyMenu(props) {
  const classes = useStyles();
  //console.log(props.location)

  const [time, setTime] = React.useState()

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h2" gutterBottom>
        Добрый день, Авиакомпания! <br></br> Выберите действие:
      </Typography>
      <Button variant="contained" color="primary" href="/company/showrequest">
        Получить список всех заявок
      </Button>
      <Button variant="contained" color="primary" href="/company/showrevisionrequest">
        Получить список заявок, требующих рассмотрения
      </Button>

    </Paper>
  );
}
