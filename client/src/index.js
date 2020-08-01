import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import {CurrentUserProvider} from './Components/CurrentUserContext';

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
