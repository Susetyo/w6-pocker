import React from 'react';
import HomeComponent from './components/Home/HomeComponent';
import RoomsComponent from './components/Rooms/RoomsComponent';
import AuthComponent from './components/Auth/AuthComponent';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const user = useSelector(selectUser);

  console.log(user)

  return (
    <Router>
      <Switch>
        <Route path="/rooms">
          <RoomsComponent />
        </Route>
        <Route path="/rooms/:id">
          <HomeComponent />
        </Route>
        <Route path="/">
          <AuthComponent />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
