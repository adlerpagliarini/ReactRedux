import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './styles/App.css';

import store from './store';
import RepositoryList from './components/RepositoryList';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <RepositoryList parentComponentName="App" />
        </Provider>
      </div>
    );
  }
}

export default App;
