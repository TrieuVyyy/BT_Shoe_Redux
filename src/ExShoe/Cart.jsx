import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
  render() {
    return (
      <div className='col-6'>
        <table className='table'>
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>IMG</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
          </thead>
          
          <tbody>
            {this.props.cart.map((item) => {
            return (
              <tr>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.price}</th>
                <th><img width={70} src={item.image} alt="" /></th>
                <th>
                  <strong>{item.soLuong}</strong>
                </th>
                <th>
                  <button onClick={() => {
                    this.props.handleDelete(item.id)
                  }}
                   className='btn btn-dark'>Del</button>
                </th>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (idShoe) => {
      let action = {
        type: 'DELETE',
        payload: idShoe,
      }
      dispatch (action);
    }
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(Cart)
