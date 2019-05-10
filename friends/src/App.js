import React from 'react';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
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
  color: white;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: [],
      activeFriend: null
    };
  }

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }
  
  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friends-list');
      })
      .catch(err => console.log(err));
  }

  setUpdateForm = friend => {
    this.setState({ activeFriend: friend });
    this.props.history.push('/update-form');
  }

  render () {
    return (
      <AppStyles>
        <AppNavStyles>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/friend-form">Add Friend</NavLink>
        </AppNavStyles>
        <AppHeader><h1>F&middot;R&middot;I&middot;E&middot;N&middot;D&middot;S</h1>      
        </AppHeader>
        <Route 
          exact 
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}              
            />
          )}  
        />        

        <Route 
          path="/friends-list/:id"
          render={props => (
            <Friend
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />

        <Route 
          path="/friend-form" 
          render={props => (
            <FriendForm 
            {...props} 
            addFriend={this.addFriend}
            updateFriend={this.updateFriend} 
            activeFriend={this.state.activeFriend}
          />
        )} 
      />
      </AppStyles>
    );
  }
}

export default App;
