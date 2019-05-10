import React from 'react';
import styled from 'styled-components';

const FriendInput = styled.div`
    text-align: center;
    color: white;
    font-family: 'Caveat', cursive;
    font-size: 20px;

`

const FormStyles = styled.form`
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

const FriendButton = styled.button`
    border: none;
    background-color: transparent;
    margin: 5px auto;
    cursor: pointer;
    font-size: 50px;
    color: white;
`

class FriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

    changeHandler = event => {
        let value = event.target.value;
        const name = event.target.name;        
    

        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [name]: value
            }
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addFriend(this.state.friend);
    }

   render () {
        return (
            <FriendInput>
                <h2>Add New Friend</h2>
                <FormStyles onSubmit={this.handleSubmit}>
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

                <FriendButton onClick={this.addFriend}><i class="fas fa-arrow-alt-circle-right"></i></FriendButton>
                
            </FormStyles>

        </FriendInput>
        )
    }
}

export default FriendForm;