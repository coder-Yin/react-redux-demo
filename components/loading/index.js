import React, { Component } from 'react'
export default class Loading extends Component {

    render() {
      return(
          <div className="loading">
            <div className="bg"></div>
            <div className="content">Loading...</div>
          </div>
      )
    }
}
