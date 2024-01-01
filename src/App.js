import logo from './logo.svg';
import './App.css';
import Dashboard from './Layout/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './Layout/Navi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Navi/>
        <Container className="main">
        <Dashboard/>
        </Container>
      </header>
    </div>
  );
}

export default App;
