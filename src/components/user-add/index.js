import React, { Component } from 'react'
import './style.css'
import { addUser } from '../../actions/actions'

class UserAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log('state', this.state)
  }

  onClick=()=>{
    this.props.addUser(this.state)
    console.log(this.props.addUser(this.state))
  }

  // onChange=(e)=>{
  //   console.log('input', e.target.value)
  //   this.state.firstName = e.target.value
  //   console.log(this.state.firstName)
  // }

  render() {
    return (
      <div className='user-add-visible' >
        <ul> Add user data
          <li>
            <p>Firstname</p><form><input onChange={(e)=> this.state.firstName = e.target.value} /></form>
          </li>
          <li>
            <p>Lastname</p><form><input onChange={(e)=> this.state.lastName = e.target.value} /></form>
          </li>
          <li>
            <p>Age</p><form><input onChange={(e)=> this.state.age = e.target.value} /></form>
          </li>
          <li>
            <p>Visits</p><form><input onChange={(e)=> this.state.visits = e.target.value} /></form>
          </li>
          <li>
            <p>Progress</p><form><input onChange={(e)=> this.state.progress = e.target.value} /></form>
          </li>
          <li>
            <p>Status</p><form><input onChange={(e)=> this.state.status = e.target.value} /></form>
          </li>
        </ul>
        <button onClick={this.onClick}>ADD USER</button>
      </div>
    )
  }
}

export default UserAddComponent
