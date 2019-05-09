import React from 'react';
import axios from 'axios';

export default class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null
        };
    }

    componentDidMount() {
        axios
            .get(`http://localhost:5000/friends/${this.props.match.params.id}`)
            .then(res => this.setState({ friend: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        // const { friend } = this.state;
        // if (!this.state) {
        //     return <h3>Loading friend information...</h3>;
        // } 

        
        return (
            <div className='friend-styles'>
                <div className="friend-name">{this.props.name}</div>
                <div className="friend-age">
                    Age: {this.props.age}
                </div>
                <div className="friend-email">
                    Email: {this.props.email}
                </div>
            </div>
        );

    }
}