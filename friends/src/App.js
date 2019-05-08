import React from 'react';
import FriendsList from './components/FriendsList';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const AppStyles = styled.div`
  
`

const AppHeader = styled.div`
  font-family: 'Caveat', cursive;
  text-align: center;
  font-size: 40px;
`

function App() {
  return (
    <AppStyles>
      <AppHeader><h1>FRIENDS</h1></AppHeader>
      <Route exact path="/" component={FriendsList} />      
    </AppStyles>
  );
}

export default App;
