import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Spend = props => (
    <tr>
      <td>{props.spend.username}</td>
      <td>{props.spend.description}</td>
      <td>{props.spend.amount}</td>
      <td>
        <Link to={"/edit/"+props.spend._id}>edit</Link> | <a href="#" onClick={() => { props.deleteSpend(props.spend._id) }}>delete</a>
      </td>
    </tr>
  )
export default class SpendList extends Component{
    constructor(props){
        super(props);

        
        this.deleteSpend = this.deleteSpend.bind(this)
        this.state = {spends: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/spends/')
            .then(response => {
                this.setState({spends: response.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    deleteSpend(id) {
        axios.delete('http://localhost:5000/spends/'+id)
            .then(res => console.log(res.data));

            this.setState({
                spends: this.state.spends.filter(el => el._id !== id)
            })
    }


    spendList(){
        return this.state.spends.map(currentSpend =>{
            return <Spend spend={currentSpend} deleteSpend={this.deleteSpend} key={currentSpend._id}/>;
        })
    }

    render(){
        return(
            <div>
                <h1>Logged Spends</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {this.spendList()}
                    <tbody>
                        {this.spendList()}
                    </tbody>
                </table>
            </div>
        )
    }
}