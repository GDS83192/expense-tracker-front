import React, {Component} from 'react';
import axios from 'axios'
export default class CreateSpend extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            description: '',
            amount: 0,
            users:[]
        }
    }

    componentDidMount() {
       axios.get('http://localhost:5000/users/')
        .then(response =>{
            if (response.data.length > 0){
                this.setState({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                });
            }
        })
        .catch((error) =>{
            console.log(error);
        })
      }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeAmount(e) {
        this.setState({
          amount: e.target.value
        });
      }
    //Methods for Form Submit

    onSubmit(e) {
        e.preventDefault();

        const spend = {
            username: this.state.username,
            description: this.state.description,
            amount: this.state.amount,
        }
        console.log(spend);
        axios.post('http://localhost:5000/spends/add', spend)
            .then(res => console.log(res.data))
        // window.location = '/';
    }
    //Need to look up what window.location = '/' does

    render(){
        return(
            <div>
                <h1>Add a Spend</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            />
                            </div>
                            <div className="form-group">
                                <label>Amount:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.amount}
                                    onChange={this.onChangeAmount}
                                    />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="submit" value="Create Spend Log" className="btn btn-primary"/>
                                        </div>

                                    
                </form>
            </div>
        )
    }
}