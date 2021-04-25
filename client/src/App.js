import './App.css';

import Panel from './components/Panel';


function App(props) {

  //console.log(props.location);

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <Panel />
    </div>
  );
}

export default App;
