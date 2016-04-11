import React, { Component } from 'react'
import { Router, Link } from 'react-router'
import { styles } from '../styles/index.jsx'

export class Home extends Component {
  render() {
    return (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>What even is a jQuery?</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
}
