import React from 'react';
import styled from 'styled-components';

const FriendUpdate = styled.div`
    text-align: center;
    color: white;
    font-family: 'Caveat', cursive;
    font-size: 20px;

`

const UpdateStyles = styled.form`
    display: flex;
    flex-direction: column;
    width: 25%;    
    margin: 0 auto;    

    input {
        background-color: #ffffff87;
        font-size: 16px;
        text-align: center;
        height: 30px;
        margin: 5px;
        
        ::placeholder {
            color: white;
            font-weight: bold;
        }
    }
`

const UpdateButton = styled.button`
    border: none;
    background-color: transparent;
    margin: 5px auto;
    cursor: pointer;
    font-size: 50px;
    color: white;
`

class UpdateForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

    changeHandler = event => {
        event.persist();
        let value = event.target.value;   
        
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [event.target.name]: value
            }
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateFriend(this.state.friend);
    }

    render() {
        return (
            <FriendUpdate>
                <h2>Update Friend</h2>
                <UpdateStyles onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="Name"
                        value={this.state.friend.name}
                    />

                    <input
                        type="number"
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="Age"
                        value={this.state.friend.age}
                    />

                    <input
                        type="string"
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="E-mail"
                        value={this.state.friend.email}
                    />

                <UpdateButton onClick={this.updateFriend}><i class="fas fa-edit"></i></UpdateButton>
                
            </UpdateStyles>

        </FriendUpdate>
        )
    }
    
}

export default UpdateForm;
