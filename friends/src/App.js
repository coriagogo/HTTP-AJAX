import React from 'react';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const AppStyles = styled.div`

`

const AppNavStyles = styled.div`
  font-family: 'Caveat', cursive;
  text-align: right;
  margin: 20px 20px 0 0;
  font-size: 25px;
  a {
    text-decoration: none;
    color: black;
    padding: 0 10px;
  }
`

const AppHeader = styled.div`
  font-family: 'Caveat', cursive;
  text-align: center;
  font-size: 40px;
`

function App() {
  return (
    <AppStyles>
      <AppNavStyles>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/friend-form">Add Friend</NavLink>
      </AppNavStyles>
      <AppHeader><h1>F&middot;R&middot;I&middot;E&middot;N&middot;D&middot;S</h1>      
      </AppHeader>
      <Route exact path="/" component={FriendsList} />   
      <Route path="/friend"  component={Friend} />
      <Route path="/friend-form" component={FriendForm} />
    </AppStyles>
  );
}

export default App;
