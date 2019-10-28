import React from 'react';
import './App.css';
import PacMan from './Components/PacMan'

class App extends React.Component {
  state = {
    direction: 'RIGHT',
    xCoord: 0,
    yCoord: 0,
    // 0 = path
    // 1 = wall
    board: [
      [0,0,1,1,0,1,1,0,0,1],
      [0,0,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,0,0],
      [0,0,0,0,0,0,0,1,1,1],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,1,0,0,0,0,0,0,0],
      [0,0,0,1,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
    ]
  }

  onKeyDown = (e) => {
    switch(e.keyCode) {
      case 38:
        // this.setState({direction: 'UP'})
        if (this.state.yCoord === 0 || this.state.board[this.state.yCoord - 1][this.state.xCoord] === 1) break
        this.setState({yCoord: this.state.yCoord - 1})
        break
      case 40:
        // this.setState({direction: 'DOWN'})
        if (this.state.yCoord === 9 || this.state.board[this.state.yCoord + 1][this.state.xCoord] === 1) break
        this.setState({yCoord: this.state.yCoord + 1})
        break
      case 37:
        // this.setState({direction: 'LEFT'})
        if (this.state.xCoord === 0  || this.state.board[this.state.yCoord][this.state.xCoord - 1] === 1) break
        this.setState({xCoord: this.state.xCoord - 1})
        break
      case 39:
        // this.setState({direction: 'RIGHT'})
        if (this.state.xCoord === 9 || this.state.board[this.state.yCoord][this.state.xCoord + 1] === 1) break
        this.setState({xCoord: this.state.xCoord + 1})
        break
    }
  }

  render(){
    let mapped = this.state.board.map((el, i) => {
      return (
        <div className={`row row${i}`}>
          {el.map((ele, ind) => {
            if (ele === 0) {
              return <div key={ind} className="zero"/>
            } else if (ele === 1){
              return <div key={ind} className="one"/>
            }
          })}
        </div>
      )
    })
    return (
      <div className="map" tabIndex="0" onKeyDown={e => this.onKeyDown(e)}>
        <PacMan x={this.state.xCoord} y={this.state.yCoord}/>
        {mapped}
      </div>
    );
  }
}

export default App;
