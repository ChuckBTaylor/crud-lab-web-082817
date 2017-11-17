import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      payload: this.state
    })
    this.setState({text: ""})
  }

  handleChange = (ev) => {
    this.setState({text: ev.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.text}/>
        <input type='submit' />
      </form>
    );
  }
};

export default RestaurantInput;
