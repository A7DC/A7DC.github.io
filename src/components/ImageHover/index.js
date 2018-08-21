import React, { Component } from 'react'
import { Spring, Transition } from 'react-spring'

const classes = {
  container: 'relative vh-100 cover mb6 overflow-hidden'
}

class ImageHover extends Component {

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      animate: true
    }
  }

  toggle() {
    this.setState({
      animate: !this.state.animate
    }, () => console.log(this.state.animate, 'this.state.animate'))
  }

  render() {
    const { children, bg} = this.props
    const toggle = this.state.animate
    return (
      <div 
        className={classes.container}
        onMouseEnter={this.toggle}
        onMouseLeave={this.toggle}
        >
        <Spring from={{ transform: 'scale(1)', height: `${0}%` }} to={{ transform: toggle ? 'scale(1)' : 'scale(1.2)', height: `${100}%`  }}>
          {styles => (
            <div style={styles}>
              <div 
                className={'cover w-100 h-100'}
                style={{
                  backgroundImage: `url(${bg})`
                }}>
              </div>
            </div>
          )}
        </Spring>
      </div>
    )
  }
}


export default ImageHover;

