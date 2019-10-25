import React from 'react';
import './styles/app.scss';

import Home from './components/home';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Home />
      </div>
    );
  }
}

export default App;
