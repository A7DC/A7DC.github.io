import React, {Component} from 'react'
import { typography, lists } from '../../tachyons-classes'

// components
import Hero from '../Hero'
import Container from '../Container'
import ContentContainer from '../ContentContainer'
import ImageHover from '../ImageHover'

import data from '../../db'

const classes = {
  section: 'pb4',
  container: 'pb6 pt6 ph5 pl5-l pr6-l mw8'
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
          <div className={classes.container}>
            <section className={classes.section}>
              <h1 className={typography.t1}>Our goal</h1>
              <p className={`${typography.pLead}`}>The goal of the project was to find out ways in which we could help improve the process of finding and organising dates. We envisioned an Uber-like service where a client could browse a directory of advertisers and request a booking with them, pay a deposit and/or securely hand over an ID, go on the date, and give a rating afterwards. </p>
              <p className={`${typography.pLead}`}>Our high level goals were to create a system that allowed for:</p>
              <ul className={`${typography.pLead}${lists.ul}`}>
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
        <div className='vh-100'>
            <ImageHover bg={'https://lh3.googleusercontent.com/301SQHGeMAkLl8k4KTLn1uiXC2xxnrRAT0SCe4R8QZJmZ64ELqMjcDzP-AohQSH5YhWBsqLItpS63JELmc_MoMl6TdKESkcBTeD4jwJdBNkD-YI0m_bGsO4KIlizeW1NkxB0ymEZtpDtm5pVqK4yuKLc5plXukFdyAlBII5z-ofRv7I7XdXVa9f75094rUz4PWscTBwTxSEYcSngAZK4Z3ZdqI1liNGL8jX_OCb091zmxPAomDmvw0USrnyAI44i5Qm63L5m0kPpKOYKjytq9FGrvFWtDZauJhLafTdfewvN9-7aIAIDFE6jPEaovGwssRIles4W4sXylIMJnv3Rqqb_cypcFf0oDSaeL6pzxCHKEr6v4wt8CYcuFuq3zguplLmVr_nheXHkVmQUkRjXQ4UpL127gpg24Uv7WtX-8yQvhj0ISu47bhi4wzi6ao-7qJjTr1XSZ2iYo6calKsTqh0pPA0eTz3-prds1w5i1xjmLujESx3lksMDM61YvBXueyxUSvydsjC10okRLy3atq2WIdbWqFZ3sPjZPVIht8NGA0j9ByK_ea5QOq9clzvfk46L5zqWmjM79R8eWBi18U2g5qnZRwmiNJU2nVbdm6ra7PpiLHWiCjLyk-Y00CE=w2080-h1560-no'} />
        </div>
        <ContentContainer>
          <div className={classes.container}>
            <section className={classes.section}>
              <p className={`${typography.pLead}`}>After discussing with the team, we believed the biggest problems were:</p>
              <ul className={`${typography.pLead} ${lists.ul}`}>
                <li className={lists.li}>Difficulty knowing whether the advertiser is still accepting bookings as adverts are often left online when escorts stop providing their services. That likely meant clients were having to send out multiple requests that were never accepted.</li>
                <li className={lists.li}>Reviews of advertisers cannot be trusted because nobody verifies if the dates take place.</li>
                <li className={lists.li}>Some profiles were obviously fake.</li>
                <li className={lists.li}>These sites looked old, were very slow, and the user experiences was poor.</li>
              </ul>
            </section>
            <section className={classes.section}>
              <h1 className={typography.t1}>Talking to users</h1>
                <p className={`${typography.pLead}`}>It was important to speak with users before proceeding further so I set up calls with some advertisers and clients. Through listening to the experiences of these people, I had hoped to test our initial thinking and identify any problems we hadn’t yet thought of.</p>
                <p className={`${typography.pLead}`}>Talking to users was incredibly insightful. At the start of the project the initial thinking was we needed to build an on demand, Uber-like service (to cater for bookings at short notice) but what we discovered was that advertisers needed at least two hours to prepare for a booking. We spoke to three female advertisers, and three male clients.</p>
                <p className={`${typography.pLead}`}>“Clients sometimes want a dinner date within an hour, which makes it difficult when you haven’t got your face on”, one advertiser told us.</p>
                <p className='big-text'>“makes it difficult when you haven’t got your face on”</p>
                <p className={`${typography.pLead}`}>Reviews and ratings were also discussed.</p>
                <p className={`${typography.pLead}`}>While advertisers told us they enjoyed reading reviews that were positive, they were concerned with the potential of personal information being revealed, or having untrue statements written about them. </p>
                <p className={`${typography.pLead}`}>On the other hand, client’s feelings were mixed. One expressed solidarity with the feelings of the advertisers, while the other two enjoyed reading reviews prior to making a decision on whether to request a booking with an advertiser.</p>
                <p className={`${typography.pLead}`}>Asked whether they believe ratings should be reciprocal, one advertiser told us they’re “not interested whether they’re good in bed, would just like to know whether they’re respectful”</p>
                <p className='big-text'>“Not interested whether they’re good in bed, just would like to know whether they’re respectful”</p>
                <p className={`${typography.pLead}`}>
                  After conducting several rounds of problem-solution interviews, I transposed the information into personas. These personas detailed our users’ needs, experiences, behaviours and goals, allowing us to easily reference the information when needed.</p>
            </section>
          </div>
        </ContentContainer>
        <div className='vh-100'>
            <ImageHover bg={'https://lh3.googleusercontent.com/3weHspjNdkavYs2OpJvE_nFQiJTVEgZzZdBROBNSCxfr_83G0GKWnoVuWwhFNTCc2JwtjTPLKJE_ajxiDBpXa8PTMh_OcBteoMTwlwdLUquQ5Bq6LrEL4GoDAlb1Ccc-s-2Fox9IpVarFKJTz8FnZk6f1Mo9nAgWgoQuZgQWiVAeNYqyBsid3oHFwHBD6p4OFNe1uhiTn-4L1zQoc-CwXhsZGNK4iucW4D3P6Gig4kEDJSDybNVf-1MB4EVSxJ4OAY2E6wQwwbNDfch0cyAQ_asW6mrJIEt7r912OPJBCQQGaFR-6dcazJk71NwnzRBxBRO-972lD__qhP2qX2Rxcp43ipwP4vzj62LqAgankuLwdYRkDie6q9jMDKRzZHuOxCBF4CivjeaJB9U6IuSHgkx_aMCEUEcZcrLGT4nrkPICaMiMlE1Su-FLXbgDAqGWkk4DAYeM9ZS1WBnJMiEMhnyoAppGmxe77DvOP7TOzL5pEVfTPabTGSzHFr_o5DS-GQQHeqD_iPCNBbX8VGelWiKys1egVnGpRrfat4p-cSSrsESd60kQteUJFb_xUIIle4Lo-dUaKoJjEbOkCYYBG7s2Cip237CI_Dc55CT7mhdWzRhumksr6clElwVk3FU=w2080-h1560-no'} />
        </div>
        <ContentContainer>
          <div className={classes.container}>
            <section className={classes.section}>
              <p className={`${typography.pLead} pb5`}>Throughout the course of these interviews, the following problems kept coming up:</p>
              <section className={classes.section}>
                <h2 className={`${typography.t2} pb3`}><b>Advertisers</b></h2>
                <ul className={`${typography.pLead}${lists.ul}`}>
                  <li className={lists.li}>None of the review boards or directories (which allowed user-submitted reviews) could be verified, so reviews are open to abuse. </li>
                  <li className={lists.li}>Can’t verify clients identity easily beforehand </li>
                  <li className={lists.li}>Time wasting (either people taking too long to book, or never booking)</li>
                  <li className={lists.li}>No rating of clients prior to the meet - “Not interested whether they’re good in bed, just would like to know whether they’re respectful”</li>
                </ul>
              </section>
              <section className={classes.section}>
                <h2 className={`${typography.t2} pb3`}><b>Clients</b></h2>
                <ul className={`${typography.pLead}${lists.ul}`}>
                  <li className={lists.li}>Advertisers aren’t available at the time of request</li>
                  <li className={lists.li}>Contact number doesn’t work</li>
                  <li className={lists.li}>Fake ads / person not the same as their photos</li>
                  <li className={lists.li}>Poor service</li>
                  <li className={lists.li}>They enjoy reading reviews</li>
                </ul>
              </section>
            </section>
            <section className={classes.section}>
                <h1 className={typography.t1}>The discovery</h1>
                <p className={`${typography.pLead}`}>The biggest takeaway from talking to users was that we should be focusing on bookings in the future, not ‘right now’. If we hadn’t learned this early on we may have committed a lot of time developing a product which didn’t suit our users needs.</p>
                <p className={`${typography.pLead}`}>It became clear that advertisers were incredibly interested in reducing the amount of time they spent organising bookings, and focused instead on the work itself. They wanted to reduce the amount of time it took to organise a booking, and have those bookings actually go through smoothly.</p>
                <p className={`${typography.pLead}`}>For the clients; they were frustrated that advertisers were often not available at the time of request, along with being annoyed with fake profiles and/or receiving poor service during the date.</p>
            </section>
            <section className={classes.section}>
                <h1 className={typography.t2}>Reducing time wasting</h1>
                <p className={`${typography.pLead}`}>We believe that encouraging users to provide ID and including reciprocal ratings between the client and provider will reduce time being wasted for both parties.</p>
                <p className={`${typography.pLead}`}>We will know that we are right or wrong once we see the following feedback from the market:</p>
                <ul className={`${typography.pLead}${lists.ul}`}>
                  <li className={lists.li}>qualitative feedback from users saying that less of their time is wasted using our service </li>
                  <li className={lists.li}> 35% of conversations resulting in completed bookings*.</li>
                </ul>
                <p className={`${typography.pLead} pb4`}>*Our research tells us that booking requests occur at a 5%-10% success rate. </p>
            </section>
            <section className={classes.section}>
                <h1 className={typography.t2}>Increasing listing quality and the service received</h1>
                <p className={`${typography.pLead}`}>We believe that encouraging clients to rate advertisers and publishing an average of ratings on an advertisers profile -- as well as moderating the platform based on these ratings (e.g removing profiles listed at X star rating and below after N amount of ratings) -- that we will increase the quality of adverts on the platform.</p>
                <p className={`${typography.pLead}`}>We will have succeeded in this once we see the following feedback from clients:</p>
                <ul className={`${typography.pLead}${lists.ul}`}>
                  <li className={lists.li}>Qualitative feedback from users saying the quality of the profiles on the service was high</li>
                </ul>
            </section>
            <section className={classes.section}>
              <h1 className={typography.t1}>Introducing Bordellio</h1>
              <p className={`${typography.pLead}`}>In this age we’ve came to expect more from our apps. Bordellio gives sex professionals and their clients the ability to connect and be free. Bordellio makes it easy for clients to find advertisers, to communicate with one another, and ultimately, to have fun.</p>
            </section>
              {data.caseStudy[0].bordellio.features.map((feature, i) => {
                return (
                  <Feature t1={feature.t1} content={feature.content} video={feature.video} key={i} />
                )
              })}
              <section className={classes.section}>
                <h1 className={typography.t1}>Final thoughts</h1>
                <p className={`${typography.pLead}`}>In the course of this project I have matured greatly as a designer, due in large part to my role as a co-founder, and the various different hats I’ve had to wear because of this (founder, designer, engineer).  </p>
                <p className={`${typography.pLead}`}>The biggest difficulty has been the business side of things. The fact this industry exists (most places) in a legal grey area has made this project a challenge, especially when it comes to launching. </p>
                <p className={`${typography.pLead}`}>While this project is a work in progress, so too is this case study. As we continue to learn and build more this post will be updated to reflect those changes.</p>
              </section>
          </div>
        </ContentContainer>
      </div>
    </Container>
    )
  }
}


export default Bordellio

const Feature = ({title, content, video}) => (
  <section className={classes.section}>
    <h1 className={typography.t2}>{title}</h1>
    <video 
      className="w-100"
      autoplay="true"
      loop="true"
      muted
      src={video}>
      Sorry, your browser doesn't support embedded videos.
    </video>
    <p className={`${typography.pLead}`}>{content}</p>
  </section>
)