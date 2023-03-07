import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";

import Home from './pages/Home/Home';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
