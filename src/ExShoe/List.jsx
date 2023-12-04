import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item';

class List extends Component {
  render() {
    let {list} = this.props;
    return (
      <div className='row col-6'>
      {list.map((item) => {
        return <Item key={item.id} data ={item}/>
      })}
    </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    list: state.shoeArr,
  }
}

export default connect (mapStateToProps)(List);