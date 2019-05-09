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

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return(
            <FriendsListWrapper>
                {this.state.friends.map(friend => (
                    <FriendDetails key={friend.id} friend={friend} />
                ))}
            </FriendsListWrapper>
        );
    }
}

function FriendDetails({ friend }) {
    const { name, age, email } = friend;
    return (       
        <FriendCardStyles>     
            <Link to={`/friend/${friend.id}`}>              
                <NameStyles>{name}</NameStyles>
                    {/* <div className="friend-age">
                        Age: {age}
                    </div>
                    <div className="friend-email">
                        Email: {email}
                    </div> */}
            </Link>
        </FriendCardStyles>
            
        
    );
}