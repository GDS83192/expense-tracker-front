import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
     <Navbar />
     <br/>
     <Route path="/" exact component={SpendList}/>
     <Route path="/edit/:id" component={EditSpend}/>
     <Route path="create" component={CreateSpend}/>
     <Route path="/user" component={CreateUser}/>
   </Router>
  );
}

export default App;
