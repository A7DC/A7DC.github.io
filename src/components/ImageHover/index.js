import React, { Component } from 'react'
import { Spring, Transition } from 'react-spring'

const classes = {
  container: 'relative white vh-100 cover mb6'
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
        style={{
          backgroundImage: `url(${bg})`
        }}
        onMouseEnter={this.toggle}
        onMouseLeave={this.toggle}
        >
        <Spring from={{ opacity: 0 }} to={{ opacity: toggle ? 0.5 : 1  }}>
          {styles => <div style={styles}>{children}</div>}
        </Spring>
      </div>
    )
  }
}


export default ImageHover;

