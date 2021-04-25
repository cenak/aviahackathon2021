import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    padding: 15,
  },
  comment: {
      minWidth: 500,
  }
}));

export default function RequestDetails() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Button variant="contained" href="/plane">На главную</Button>
      <Typography variant="h5" component="h2" gutterBottom>
        Заявка: "Авиационные стремянки"
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.comment} id="outlined-basic" InputProps={{readOnly: true}} label="Ваш комментарий" value="Здесь располагается комментарий" multiline variant="outlined" />
        <br></br>
        <TextField className={classes.comment} id="outlined-basic" InputProps={{readOnly: true}} label="Статус запроса в аэрокомпании" value="Одобрено" multiline variant="outlined" />
        <br></br>
        <TextField className={classes.comment} id="outlined-basic" InputProps={{readOnly: true}} label="Статус запроса в аэропорту" value="В расмотрении" multiline variant="outlined" />
        <br></br>
        <TextField className={classes.comment} id="outlined-basic" InputProps={{readOnly: true}} label="Комментарий аэропорта" value="Здесь располагается комментарий аэропорта" multiline variant="outlined" />
      </form>
      <Button variant="contained" color="primary">
        Редактировать
      </Button>
    </Paper>
  );
}
