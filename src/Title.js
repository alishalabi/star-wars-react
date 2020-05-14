import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props)
    this.state=  {
      content: "Ali Shalabi - Few2.3 Final"
    }
  }
  render() {
    return (
      <div>{this.state.content}</div>
    )
  }
}

export default Title;
