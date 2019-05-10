import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';



const FriendsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;  
  width: 90%;
  margin: 0 auto;  
`

const FriendCardStyles = styled.div`
    width: 45%;
    border-radius: 10px;
    background-color: #ffffff87;
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }   
`

const NameStyles = styled.span`
    font-family: 'Caveat', cursive;
    font-size: 30px;
    font-weight: 1000;
`
export default class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    

    render() {
        console.log(this.props);
        return(
            <FriendsListWrapper>
                {this.props.friends.map(friend => (
                    <FriendDetails key={friend.id} friend={friend} deleteFriend={this.props.deleteFriend} />
                    
                ))}
            </FriendsListWrapper>
        );
    }
}

function FriendDetails(props) {
    const { name, age, email, id } = props.friend;
    return (       
        <FriendCardStyles>     
            {/* <Link to={`/friends-list/${friend.id}`}>               */}
                <NameStyles>{name}</NameStyles>
                    <div className="friend-age">
                        Age: {age}
                    </div>
                    <div className="friend-email">
                        Email: {email}
                    </div>
                    <button onClick={() => props.deleteFriend(id)}>Delete Friend</button>
                    {/* <button onClick={this.updateForm}>Update Friend</button> */}
            {/* </Link> */}
        </FriendCardStyles>
            
        
    );
}