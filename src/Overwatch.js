import React, { Component } from 'react'
import OverwatchLogo from './assets/overwatchLogo.png'
import './assets/lfg.css'

class Overwatch extends Component {
  render() {
    return (
      <div className='Box'>
      <img src = {OverwatchLogo} class='center'/>
      </div>
    )
  }
}

export default Overwatch
