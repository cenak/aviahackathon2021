import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import conf from "../../config/conf";

import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    /*display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      min: theme.spacing(16),
      height: theme.spacing(16),
    },*/
    padding: 15,
  },
  table: {
    minWidth: 500,
  },
}));



  
const rows = [];

function createData(name, status, id) {
  return { name, status, id };
}

function GetAllRequests() {
  rows.length = 0;

  /*axios.get(`http://${conf.serverAPI}/api/get_request`)
    .then((response) => {
      alert(response);
    })
    .catch((error) => alert(`Не удалось загрузить список услуг по причине: "${error}"`));*/
  //alert(conf.serverAPI);

  rows.push(createData('Авиационные стремянки', "В рассмотрении", 159));
  rows.push(createData('Насосы', "В рассмотрении", 237));
  rows.push(createData('Устройства воздушного запуска', "В рассмотрении", 262));
  rows.push(createData('Трапы', "В рассмотрении", 305));
}


//------------------------------------------ Удалить в финале
rows.push(createData('Авиационные стремянки', "В рассмотрении", 159));
rows.push(createData('Насосы', "В рассмотрении", 237));
rows.push(createData('Устройства воздушного запуска', "В рассмотрении", 262));
rows.push(createData('Трапы', "В рассмотрении", 305));
//-----------------------------------------------------------

export default function ShowAllRequestsByCompany() {
  const classes = useStyles();

  
  /*React.useEffect(() => {
    GetAllRequests();
  }, []);*/

  return (
    <Paper className={classes.root}>
      <Button variant="contained" href="/company">На главную</Button> &nbsp;
      <Button variant="contained" onClick={GetAllRequests}>Обновить</Button>
      <Typography variant="h5" component="h2" gutterBottom>
        Список заявок:
      </Typography>


      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название услуги</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell align="right">Подробнее</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">    
                  <Button variant="contained" color="primary" href={"/company/showrequest/"+row.id}>Подробнее</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    </Paper>
  );
}
