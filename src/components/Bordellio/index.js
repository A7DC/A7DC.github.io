import React, {Component} from 'react'
import { structure, heading } from '../../tachyons-classes'

// components
import Hero from '../Hero'
import Container from '../Container'

class Bordellio extends Component {

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
    let windowScrollPosition = this.container.scrollTop
    this.setState({ windowScrollPosition: windowScrollPosition }, console.log(this.state.windowScrollPosition, 'windowScrollPosition'))
  }

  render() {
    const {style} = this.props
    return (
    <Container style={style} background={`#F9F9F9`} color={'#1B1B1C'}>
      <div className='vh-100 overflow-y-scroll relative' onScroll={this.handleScroll} ref={r => this.container = r}>
        <Hero />
        <div className={structure.container}>
          <div className='ph5'>
            <p className={heading.subtitle}>
              In 2017, advertising websites which catered for independent escorts were poorly designed, lacked features that we’ve come to expect from modern apps in terms of experience and security, and the space seemed stagnant in its pursuit of innovation. 

              I was part of a project which aimed to make paid dating easier, safer, and more fun for those involved.

              Due to the privacy of our users (and for obvious competitive reasons) some details have been omitted and obfuscated from this case study. 
            </p>
          </div>
        </div>
      </div>
    </Container>
    )
  }
}

export default Bordellio
