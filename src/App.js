import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          Hello World
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
