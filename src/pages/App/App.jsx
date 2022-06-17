import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Plant from '../Plant/Plant';
import VirtualGarden from '../../pages/VirtualGarden/VirtualGarden';
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Switch>
            <Route path="/plants/info">
              <Plant user={user} setUser={setUser} />
            </Route>
            <Route path="/plants/virtual">
              <VirtualGarden />
            </Route>
            <Redirect to="/plants/virtual" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}