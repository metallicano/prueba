import './App.css';
import Tarjetas from './components/Tarjetas';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Facturas from './components/Facturas';
import Header from './components/Header';
import Cuestionario from './components/Cuestionario';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
        <Route path="/" exact component={Cuestionario}></Route>
        <Route path="/Facturas" component={Facturas}></Route>
        <Route path="/Diagramacion" component={Tarjetas}></Route>
      </Router>
    </div>
  );
}

export default App;
