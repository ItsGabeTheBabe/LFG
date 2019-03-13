import React, { Component } from 'react'
import FortniteLogo from './assets/fortniteLogo.png'
import './assets/lfg.css'

class Fortnite extends Component {
  render() {
    return (
      <div className='Box'>
      <img src = {FortniteLogo} class='center'/>
      </div>
    )
  }
}

export default Fortnite
