import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';




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
}));

export default function CreateRequest() {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const [checkedLunch, setCheckedLunch] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeLunch = (event) => {
    setCheckedLunch(event.target.checked);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h2" gutterBottom>
        Заявка "Авиационные стремянки" {/*"{request name}"*/}
      </Typography>
      <FormControlLabel control={<Checkbox checked={checkedLunch} onChange={handleChangeLunch} name="checkedB" color="primary"/>} label="Добавить ланч" /> <br></br>
      <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} name="checkedB" color="primary"/>} label="Срочно (в течении 5 минут)" />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" multiline className={classes.comment} label="Комментарий (опционально)" variant="outlined" />
      </form>
      <Button variant="contained" href="/plane">На главную</Button> &nbsp;&nbsp;
      <Button variant="contained" color="primary">
        Отправить
      </Button>
    </Paper>
  );
}
