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

export default function PlaneMenu() {
  const classes = useStyles();

  //const [time, setTime] = React.useState()

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h2" gutterBottom>
        Добрый день, Иванов Иван Иванович!
        <br></br> Желаем Вам отличного полета и мягкой посадки!
        <br></br><br></br> Выберите действие:
      </Typography>
      <Button variant="contained" color="primary" href="plane/createrequest">
        Создать заявку
      </Button>
      <Button variant="contained" color="primary" href="plane/showrequest">
        Просмотреть заявку
      </Button>

    </Paper>
  );
}
