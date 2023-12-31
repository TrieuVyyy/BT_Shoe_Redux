import React, { Component } from 'react'
import { connect } from 'react-redux'

class Item extends Component {
  render() {
    return (
      <div className='col-4'>
        <img className='w-100' src={this.props.data.image} alt="" />
        <h4>{this.props.data.name}</h4>
        <button onClick={() => {
          this.props.handleAddToCart(this.props.data);
        }}
        className='btn btn-success'>Add</button>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (shoe) => {
      let action = {
        type: 'ADD',
        payload: shoe,
      }
      dispatch (action)
    }
  }
}

export default connect (null,mapDispatchToProps)(Item)

