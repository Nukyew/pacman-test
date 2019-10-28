import React, {Component} from 'react'

export default class PacMan extends Component {
    state = {}
    render(){
        let style = {top: `${this.props.y * 10}%`, left: `${this.props.x * 10}%`, transition: '.2s linear'}
        return(
            <div className="player" style={style}/>
        )
    }
}