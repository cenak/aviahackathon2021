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

function createData(name, company, reic, status, portstatus, id) {
  return { name, company, reic, status, portstatus, id };
}

function GetAllRequests() {
  rows.length = 0;

  /*axios.get(`http://${conf.serverAPI}/api/get_request`)
    .then((response) => {
      alert(response);
    })
    .catch((error) => alert(`Не удалось загрузить список услуг по причине: "${error}"`));*/
  //alert(conf.serverAPI);

  rows.push(createData('Авиационные стремянки', 'Pobeda', "Выполнено", 159));
  rows.push(createData('Насосы', 'Aeroflot', "В рассмотрении", 237));
  rows.push(createData('Устройства воздушного запуска', 'UTair', "Отказано", 262));
  rows.push(createData('Трапы', 'Rusline', "Выполнено", 305));
}


//------------------------------------------ Удалить в финале
rows.push(createData('Авиационные стремянки', 'Pobeda', 'DP158', "Выполнено", "В рассмотрении", 159));
rows.push(createData('Устройства воздушного запуска', 'Aeroflot', 'SU1117', "Выполнено", "В рассмотрении", 237));
rows.push(createData('Сервисное оборудование', 'UTair', 'UT400', "Выполнено", "В рассмотрении", 262));
rows.push(createData('Буксиры', 'Rusline', '7R136', "Выполнено", "В рассмотрении", 305));
//-----------------------------------------------------------

export default function ShowAllRequestsByAirport() {
  const classes = useStyles();

  
  /*React.useEffect(() => {
    GetAllRequests();
  }, []);*/

  return (
    <Paper className={classes.root}>
      <Button variant="contained" href="/airport">На главную</Button> &nbsp;
      <Button variant="contained" onClick={GetAllRequests}>Обновить</Button>
      <Typography variant="h5" component="h2" gutterBottom>
        Список заявок:
      </Typography>


      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название услуги</TableCell>
            <TableCell>Авиакомпания</TableCell>
            <TableCell>Рейс</TableCell>
            <TableCell>Статус авиакомпании</TableCell>
            <TableCell>Статус аэропорта</TableCell>
            <TableCell align="right">Подробнее</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.company}</TableCell>
              <TableCell>{row.reic}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.portstatus}</TableCell>
              <TableCell align="right">    
                  <Button variant="contained" color="primary" href={"/airport/showrequest/"+row.id}>Подробнее</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    </Paper>
  );
}
