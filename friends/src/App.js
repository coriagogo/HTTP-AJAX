import React from 'react';
import FriendsList from './components/FriendsList';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FriendsList} />
    </div>
  );
}

export default App;
