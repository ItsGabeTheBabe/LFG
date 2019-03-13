import React, { Component } from 'react'
import SmiteLogo from './assets/smiteLogo.png'
import './assets/lfg.css'

class Smite extends Component {
  render() {
    return (
      <div className='Box'>
      <img src = {SmiteLogo} class='center'/>
      </div>
    )
  }
}

export default Smite
