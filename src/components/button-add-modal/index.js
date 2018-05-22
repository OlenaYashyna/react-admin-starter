import React, { Component } from 'react'
import './style.css'

// const BtnAddModal = ({ visible }) => {
//   if (visible())
//     return <p>test</p>
//
//   return <p></p>
// }

class BtnAddModal extends Component {
   componentDidMount() {
   this.props.addModal();
   }

  onClick = () => {

  }

  render() {
    return (
      <div className='btn-container'>
        <button className='btn-add'>ADD</button>
      </div>
    )
  }
}

export default BtnAddModal
