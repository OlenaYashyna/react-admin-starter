import React, { Component } from 'react'
import './style.css'
import BtnAddModal from '../../containers/add-modal/index'
import UserAddComponent from '../../containers/user-add/index'

export default class TableAdd extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onClick = () => {

  }

  render() {
    return (
      <div className='container'>
      <table className='table' cols="6">
        <caption>Table</caption>
        <tr className='table-row'>
          <th className="table-data-item">Firstname</th>
          <th className="table-data-item">Lastname</th>
          <th className="table-data-item">Age</th>
          <th className="table-data-item">Visits</th>
          <th className="table-data-item">Progress</th>
          <th>Status</th>
        </tr>
          <tbody>{
            this.props.users.map(user => (
              <tr
                className='table-row'
                onClick={this.onClick}
              >
                <td className="table-data-item">{user.firstName}</td>
                <td className="table-data-item">{user.lastName}</td>
                <td className="table-data-item">{user.age}</td>
                <td className="table-data-item">{user.visits}</td>
                <td className="table-data-item">{user.progress}</td>
                <td>{user.status}</td>
              </tr>
            ))
          }
          </tbody>
      </table>
        <BtnAddModal />
        <UserAddComponent />
      </div>
    )
  }
}

