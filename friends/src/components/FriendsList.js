import React from 'react';
import axios from 'axios';

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
            <div className="friends-list">
                {this.state.friends.map(friend => (
                    <FriendDetails key={friend.id} friend={friend} />
                ))}
            </div>
        );
    }
}

function FriendDetails({ friend }) {
    const { name, age, email } = friend;
    return (
        <div className="friend-card">
            <h2>{name}</h2>
            <div className="friend-age">
                Age: {age}
            </div>
            <div className="friend-email">
                Email: {email}
            </div>
        </div>
    );
}