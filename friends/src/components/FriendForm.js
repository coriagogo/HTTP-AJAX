import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

   render () {
        return (
            <div>
                <h2>Add New Friend</h2>
                <form>
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

                <button className="add-friend-btn">Add New Friend</button>
                
                </form>

            </div>
        )

   }
}

export default FriendForm;