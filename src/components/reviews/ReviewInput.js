import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: "",
    restaurantId: this.props.restaurantId
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: this.state
    })
    this.setState({text: ""})
  }

  handleChange = (ev) => {
    this.setState({text: ev.target.value})
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.text}/>
        <input type='submit' />
      </form>
      <Reviews store={this.props.store} restId={this.props.restId} />
      </div>
    );
  }
};

export default ReviewInput;
