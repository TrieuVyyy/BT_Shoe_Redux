import React, { Component } from 'react'
import Cart from './Cart'
import List from './List'
import { shoeArr } from './data'

export default class ExShoe extends Component {

  render() {
    return <div className='row'>
      <Cart />
      <List />
    </div>
  
  }
}
