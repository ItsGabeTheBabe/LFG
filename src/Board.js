import React, { Component } from 'react'
import Apex from './Apex'
import Overwatch from './Overwatch'
import Smite from './Smite'
import Fortnite from './Fortnite'
import Dota from './Dota'
import './assets/lfg.css'

class Board extends Component {
  render() {
    return (
      <div className="Board">
      <Apex/>
      <Overwatch/>
      <Smite/>
      <Fortnite/>
      <Dota/>
      </div>
    )
  }
}
export default Board
