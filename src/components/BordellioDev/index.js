import React, { Component } from 'react'
import { typography, lists } from '../../tachyons-classes'

// components
import Hero from '../Hero'
import Container from '../Container'
import ContentContainer from '../ContentContainer'

const classes = {
  section: 'pb4 fl',
  container: 'pb6 pt6 ph4 pl5-l pr6-l mw8',
  imageContainer: 'vh-100 w-100 fl pb6'
}

class BordellioDev extends Component {

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
    const { style } = this.props
    return (
      <Container style={style} background={`#F9F9F9`} color={'#1B1B1C'}>
        <div className='overflow-y-scroll relative' onScroll={this.handleScroll} ref={r => this.container = r}>
          <Hero />
          <ContentContainer>
            <div className={classes.container}>
              <section className={classes.section}>
                <h1 className={typography.t1}>Our goal</h1>
                <p className={`${typography.pLead}`}>The goal of the project was to find out ways in which we could help improve the process of finding and organising dates. We envisioned an Uber-like service where a client could browse a directory of advertisers and request a booking with them, pay a deposit and/or securely hand over an ID, go on the date, and give a rating afterwards. </p>
                <p className={`${typography.pLead}`}>Our high level goals were to create a system that allowed for:</p>
                <ul className={`${typography.pLead} ${lists.ul}`}>
                  <li className={lists.li}>Immediate bookings (within ~2 hours of booking)</li>
                  <li className={lists.li}>A higher quality of advertisers and their clients</li>
                </ul>
              </section>
              <section className={classes.section}>
                <h1 className={typography.t1}>My role</h1>
                <p className={`${typography.pLead}`}>In terms of user experience: the planning, research and design was done by myself. I helped build the front-end using reactjs and redux. An engineer helped build the app, along with the usability tests and interviews with users.</p>
              </section>
              <section>
                <h1 className={typography.t1}>Kick off</h1>
                <p className={`${typography.pLead}`}>I began by looking at direct and indirect competitors and logging them into a Competitive Analysis Matrix. Through an heuristic evaluation of each competitor, I was better able to understand the competition and the problems users were facing.</p>
              </section>
            </div>
          </ContentContainer>
        </div>
      </Container>
    )
  }
}


export default BordellioDev

const Feature = ({ title, content, video }) => (
  <section className={classes.section}>
    <h1 className={`${typography.t2} fw6 mb3`}>{title}</h1>
    {/* <video 
      className="w-100"
      autoplay="true"
      loop="true"
      muted
      src={video}>
      Sorry, your browser doesn't support embedded videos.
    </video> */}
    <img className='mw-40 w-40-ns' src={video} />
    <p className={`${typography.pLead}`}>{content}</p>
  </section>
)