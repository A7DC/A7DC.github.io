import React, {Component} from 'react'
// import { structure, heading } from '../../tachyons-classes'

// components
import Hero from '../Hero'
import Container from '../Container'
import ContentContainer from '../ContentContainer'

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
      <div className='overflow-y-scroll relative' onScroll={this.handleScroll} ref={r => this.container = r}>
        <Hero />
      </div>
    </Container>
    )
  }
}

export default Bordellio
