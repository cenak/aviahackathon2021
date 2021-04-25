import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';




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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
  },
}));

export default function ShowRequestByCompany() {
  const classes = useStyles();

  const [companyStatus, setCompanyStatus] = React.useState('5');

  const handleChangeCompanyStatus = (event) => {
    setCompanyStatus(event.target.value);
  };

  return (
    <Paper className={classes.paper}>
      <Button variant="contained" href="/company">На главную</Button>
      <Typography variant="h5" component="h2" gutterBottom>
        Заявка: "Авиационные стремянки"
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.comment} id="outlined-basic" InputProps={{readOnly: true}} label="Комментарий пользователя" value="Желательно несколько штук" multiline variant="outlined" />
        <br></br>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Статус запроса в авиакомпании</InputLabel>
            <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={companyStatus}
            onChange={handleChangeCompanyStatus}
            label="Age"
            >
                
                <MenuItem value={5}>В рассмотрении</MenuItem>
                <MenuItem value={10}>Одобрено</MenuItem>
                <MenuItem value={20}>Отклонено</MenuItem>
            </Select>
        </FormControl>


        <br></br>
        <TextField className={classes.comment} id="outlined-basic" InputProps={{readOnly: true}} label="Статус запроса в аэропорту" value="Ожидание статуса запроса в авиакомпании" multiline variant="outlined" />
        <br></br>
        <TextField className={classes.comment} id="outlined-basic" InputProps={{readOnly: true}} label="Комментарий аэропорта" value="" multiline variant="outlined" />
      </form>
      <Button variant="contained" color="primary">
        Сохранить
      </Button>
    </Paper>
  );
}
