import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import graph3 from '../../graphs/graph3.jpg';
import graph4 from '../../graphs/graph4.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    
    padding: 15,
  },
}));

export default function AirportMenu(props) {
  const classes = useStyles();
  //console.log(props.location)

  const [time, setTime] = React.useState()

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h2" gutterBottom>
        Добрый день, Аэропорт! <br></br> Выберите действие:
      </Typography>
      <Button variant="contained" color="primary" href="/airport/showrequest">
        Получить список всех заявок
      </Button>
      <Button variant="contained" color="primary" href="/airport/showrevisionrequest">
        Получить список заявок, требующих рассмотрения
      </Button>
      <br></br>
      <br></br>
      <Typography variant="subtitle1" gutterBottom>
        Графики в реальном времени
      </Typography>
      <br></br>
      <img src={graph3} />
      <img src={graph4} />

    </Paper>
  );
}
