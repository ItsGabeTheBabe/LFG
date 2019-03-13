import React, { Component } from 'react'
import DotaLogo from './assets/dotaLogo.png'
import './assets/lfg.css'

class Dota extends Component {
  render() {
    return (
      <div className='Box'>
      <img src = {DotaLogo} class='center'/>
      </div>
    )
  }
}

export default Dota
