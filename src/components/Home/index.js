import React, { Component } from 'react';

// components
import Hero from '../Hero'
import Work from '../Work'

class Home extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    let windowScrollPosition = window.scrollY
    this.setState({ windowScrollPosition: windowScrollPosition }, () => console.log(this.state.windowScrollPosition, 'this.state.windowScrollPosition'))
  }

  getWorkRef = payload => {
    const threshold = payload.getBoundingClientRect().bottom;
    this.setState({ skillsThreshold: threshold })
  }

  getSkillsRef = payload => {
    const threshold = payload.getBoundingClientRect().bottom;
    this.setState({ experienceThreshold: threshold })
  }

  render() {
    const state = this.state.open === undefined ? 'start' : this.state.open ? 'open' : 'close'
    const { style } = this.props;
    return (
    <div 
        className='mainRoute flex flex-column'
        style={
          { ...style, 
            backgroundColor: '#171717',
            color: '#fff'
            }
      }>
        <div className={'relative w-100 bg-black'} onScroll={this.handleScroll}>
          <Hero />
          <Work windowScrollPosition={this.state.windowScrollPosition} getWorkRef={this.getWorkRef} />
      </div>
    </div>
    )
  }
}

export default Home;




// class Home extends Component {


//   render() {
//     return (
//       <Fragment>
//         <Background />
//         <Skills threshold={this.state.skillsThreshold} windowScrollPosition={this.state.windowScrollPosition} getSkillsRef={this.getSkillsRef} />
//         <Experience threshold={this.state.experienceThreshold} windowScrollPosition={this.state.windowScrollPosition} />
//       </Fragment>
//     )
//   }
// }

// export default Home;