import './App.css';
import React ,{ useState} from "react"
import Sidebar from './Sidebar';
import Chat from "./Chat";
import {useStateValue} from "./StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SidebarChat from './SidebarChat';
import Login from './Login';
function App() {
  const [ {user}, dispatch] = useStateValue();
  
  return (
    <div className="app">
    {!user ? (
      <Login />
    ):(
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    )}
    </div>
  );
}

export default App;
