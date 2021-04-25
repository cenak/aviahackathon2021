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
import { DataGrid } from '@material-ui/data-grid';
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

function createData(name, cost, id) {
  return { name, cost, id };
}

function GetRequests() {
  rows.length = 0;

  axios.get(`http://${conf.serverAPI}/api/get_request`)
    .then((response) => {
      alert(response);
    })
    .catch((error) => alert(`Не удалось загрузить список услуг по причине: "${error}"`));
  //alert(conf.serverAPI);

  rows.push(createData('Буксиры', 15000, 159));
  rows.push(createData('Сервисное оборудование', 20000, 237));
  rows.push(createData('Транспортеры', 10000, 262));
  rows.push(createData('Авиационные стремянки', 5000, 305));
}

//------------------------------------------ Удалить в финале
rows.push(createData('Буксиры', 15000, 159));
rows.push(createData('Сервисное оборудование', 20000, 237));
rows.push(createData('Транспортеры', 10000, 262));
rows.push(createData('Авиационные стремянки', 5000, 305));
//-----------------------------------------------------------

export default function CreateRequest() {
  const classes = useStyles();

  /*React.useEffect(() => {
    GetRequests();
  }, []);*/

  return (
    <Paper className={classes.root}>
      <Button variant="contained" href="/plane">На главную</Button> &nbsp;
      <Button variant="contained" onClick={GetRequests}>Обновить</Button>
      <Typography variant="h5" component="h2" gutterBottom>
        Выберите заявку:
      </Typography>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название услуги</TableCell>
            <TableCell align="right">Стоимость</TableCell>
            <TableCell align="right">Заказать</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">    
                  <Button variant="contained" color="primary" href={"/plane/createrequest/"+row.id}>Выбрать</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


      {/*<DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />*/}


    </Paper>
  );
}
