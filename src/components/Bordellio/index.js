import React, {Component} from 'react'
import { heading, lists } from '../../tachyons-classes'

// components
import Hero from '../Hero'
import Container from '../Container'
import ContentContainer from '../ContentContainer'
import ImageHover from '../ImageHover'

const classes = {
  section: 'pb4'
}

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
        <ContentContainer>
          <div className='pb6 pt6 pl5 pr6 mw8'>
            <section className={classes.section}>
              <h1 className={heading.title}>Our goal</h1>
              <p className={`${heading.pLead}`}>The goal of the project was to find out ways in which we could help improve the process of finding and organising dates. We envisioned an Uber-like service where a client could browse a directory of advertisers and request a booking with them, pay a deposit and/or securely hand over an ID, go on the date, and give a rating afterwards. </p>
              <p className={`${heading.pLead}`}>Our high level goals were to create a system that allowed for:</p>
              <ul className={`${heading.pLead}${lists.ul}`}>
                <li className={lists.li}>Immediate bookings (within ~2 hours of booking)</li>
                <li className={lists.li}>A higher quality of advertisers and their clients</li>
              </ul>
            </section>
            <section className={classes.section}>
              <h1 className={heading.title}>My role</h1>
                <p className={`${heading.pLead}`}>In terms of user experience: the planning, research and design was done by myself. I helped build the front-end using reactjs and redux. An engineer helped build the app, along with the usability tests and interviews with users.</p>
            </section>
            <section>
              <h1 className={heading.title}>Kick off</h1>
              <p className={`${heading.pLead}`}>I began by looking at direct and indirect competitors and logging them into a Competitive Analysis Matrix. Through an heuristic evaluation of each competitor, I was better able to understand the competition and the problems users were facing.</p>
            </section>
          </div>
        </ContentContainer>
        <div className='vh-100'>
            <ImageHover bg={'https://lh3.googleusercontent.com/301SQHGeMAkLl8k4KTLn1uiXC2xxnrRAT0SCe4R8QZJmZ64ELqMjcDzP-AohQSH5YhWBsqLItpS63JELmc_MoMl6TdKESkcBTeD4jwJdBNkD-YI0m_bGsO4KIlizeW1NkxB0ymEZtpDtm5pVqK4yuKLc5plXukFdyAlBII5z-ofRv7I7XdXVa9f75094rUz4PWscTBwTxSEYcSngAZK4Z3ZdqI1liNGL8jX_OCb091zmxPAomDmvw0USrnyAI44i5Qm63L5m0kPpKOYKjytq9FGrvFWtDZauJhLafTdfewvN9-7aIAIDFE6jPEaovGwssRIles4W4sXylIMJnv3Rqqb_cypcFf0oDSaeL6pzxCHKEr6v4wt8CYcuFuq3zguplLmVr_nheXHkVmQUkRjXQ4UpL127gpg24Uv7WtX-8yQvhj0ISu47bhi4wzi6ao-7qJjTr1XSZ2iYo6calKsTqh0pPA0eTz3-prds1w5i1xjmLujESx3lksMDM61YvBXueyxUSvydsjC10okRLy3atq2WIdbWqFZ3sPjZPVIht8NGA0j9ByK_ea5QOq9clzvfk46L5zqWmjM79R8eWBi18U2g5qnZRwmiNJU2nVbdm6ra7PpiLHWiCjLyk-Y00CE=w2080-h1560-no'} />
        </div>
        <ContentContainer>
          <div className='pb6 pt6 pl5 pr6 mw8'>
            <section className={classes.section}>
              <p className={`${heading.pLead}`}>After discussing with the team, we believed the biggest problems were:</p>
              <ul className={`${heading.pLead} ${lists.ul}`}>
                <li className={lists.li}>Difficulty knowing whether the advertiser is still accepting bookings as adverts are often left online when escorts stop providing their services. That likely meant clients were having to send out multiple requests that were never accepted.</li>
                <li className={lists.li}>Reviews of advertisers cannot be trusted because nobody verifies if the dates take place.</li>
                <li className={lists.li}>Some profiles were obviously fake.</li>
                <li className={lists.li}>These sites looked old, were very slow, and the user experiences was poor.</li>
              </ul>
            </section>
            <section className={classes.section}>
              <h1 className={heading.title}>Talking to users</h1>
                <p className={`${heading.pLead}`}>It was important to speak with users before proceeding further so I set up calls with some advertisers and clients. Through listening to the experiences of these people, I had hoped to test our initial thinking and identify any problems we hadn’t yet thought of.</p>
                <p className={`${heading.pLead}`}>Talking to users was incredibly insightful. At the start of the project the initial thinking was we needed to build an on demand, Uber-like service (to cater for bookings at short notice) but what we discovered was that advertisers needed at least two hours to prepare for a booking. We spoke to three female advertisers, and three male clients.</p>
                <p className={`${heading.pLead}`}>“Clients sometimes want a dinner date within an hour, which makes it difficult when you haven’t got your face on”, one advertiser told us.</p>
                <p className='big-text'>“makes it difficult when you haven’t got your face on”</p>
                <p className={`${heading.pLead}`}>Reviews and ratings were also discussed.</p>
                <p className={`${heading.pLead}`}>While advertisers told us they enjoyed reading reviews that were positive, they were concerned with the potential of personal information being revealed, or having untrue statements written about them. </p>
                <p className={`${heading.pLead}`}>On the other hand, client’s feelings were mixed. One expressed solidarity with the feelings of the advertisers, while the other two enjoyed reading reviews prior to making a decision on whether to request a booking with an advertiser.</p>
                <p className={`${heading.pLead}`}>Asked whether they believe ratings should be reciprocal, one advertiser told us they’re “not interested whether they’re good in bed, would just like to know whether they’re respectful”</p>
                <p className='big-text'>“Not interested whether they’re good in bed, just would like to know whether they’re respectful”</p>
                <p className={`${heading.pLead}`}>
                  After conducting several rounds of problem-solution interviews, I transposed the information into personas. These personas detailed our users’ needs, experiences, behaviours and goals, allowing us to easily reference the information when needed.</p>
            </section>
          </div>
        </ContentContainer>
      </div>
    </Container>
    )
  }
}

export default Bordellio
