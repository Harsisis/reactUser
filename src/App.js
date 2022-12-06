import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <body>
        <UserList></UserList>
      </body>
    </div>
  );
}

export default App;
