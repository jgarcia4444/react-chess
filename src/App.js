import './App.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import {
BrowserRouter as Router,
Routes,
Route
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './pages/Home/Home';
import Auth from './pages/Auth';
import GetUsername from './pages/Auth/GetUsername';
import GameStart from './pages/GameStart';
import LocalGame from './pages/Game/LocalGame';
import LeaderBoard from './pages/LeaderBoard';

let googleClientId = "625301503711-26scjiv2et3sopioec91g1l515a5ueee.apps.googleusercontent.com"

function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/auth/get-username" element={<GetUsername />} />
              <Route path="/game/start" element={<GameStart />} />
              <Route path="/game/local" element={<LocalGame />} />
              <Route path="/leaderboard" element={<LeaderBoard />}/>
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
