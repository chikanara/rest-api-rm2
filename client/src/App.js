
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import UserList from './components/UserList';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <Router>
       <NavBar/>
       <Route path="/" component={UserList}/>
     </Router>
    </div>
  );
}

export default App;
