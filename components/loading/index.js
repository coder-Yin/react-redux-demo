import React, { Component } from 'react'
export default class Loading extends Component {

  // componentDidMount() {
  //   console.log('Loading ------- componentDidMount');
  // }

    render() {
      console.log('Loading render');
      return(
          <div className="loading">
            <div className="bg"></div>
            <div className="content">Loading...</div>
          </div>
      )
    }
}
