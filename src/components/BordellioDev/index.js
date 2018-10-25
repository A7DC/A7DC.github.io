import React, { Component } from 'react'
import { Keyframes, config, animated } from 'react-spring'
import { typography, structure, lists } from '../../tachyons-classes'


// components
import ImageHover from '../ImageHover'
import Container from '../Container'
import ContentContainer from '../ContentContainer'

import data from '../../db'

const classes = {
  section: 'pb4 fl',
  container: 'pb6 pt6 ph4 pl5-l pr6-l mw8',
  imageContainer: 'vh-100 w-100 fl pb6'
}

const createKeyFrames = (delay, from, to) =>
  Keyframes.Spring({
    start: {
      delay,
      from: { transform: `translate3d(0,${from}%,0)`, opacity: 0 },
      to: { transform: `translate3d(0,${to}%,0)`, opacity: 1 },
      config: config.slow
    }
  })

const Image = createKeyFrames(1600, 40, 0)
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
          <section
            className={'w-100 flex flex-column content-box pt6'}>
            <ContentContainer>
              <div className={`${structure.pullTextLeft} pb6 pt6 ph4 pl5-l pr6-l mw8`}>
                <p className={typography.p}>{data.work[3].subtitle}</p>
                <h1 className={`${typography.t1} pb3`}>{data.work[3].title}</h1>
                <p className={typography.pLead}>
                  Bordellio is written in ES2015+, using Babel for ES5 transpilation. Our architecture utilizes React and Redux, with Webpack for module bundling. We are currently in the process of switching to TypeScript, and we’re using Tachyons as our CSS framework of choice.
                </p>
                <p className={typography.pLead}>
                  Due to the nature of the product, we were limited when it came to launching a native app due to censorship by the app stores. We wanted to create a similar experience to a native app (fast, smooth) but it had to be on the open platform of the web.
                </p>
                <p className={typography.pLead}>
                  Below I discuss how we went about building the application, along with the challenges we faced along the way.
                </p>
              </div>
            </ContentContainer>
            <Image native state={'start'}>
              {styles => (
                <animated.div style={styles}>
                  <div className='vh-100'>
                    <ImageHover bg={'https://images.unsplash.com/photo-1536466528142-f752ae7bdd0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a18f8b2fac38ab1fad42682f6ef7f65&auto=format&fit=crop&w=1950&q=80'} />
                  </div>
                </animated.div>
              )}
            </Image>
          </section>
          <ContentContainer>
            <div className={classes.container}>
              <section className={classes.section}>
                <h1 className={typography.t1}>Storybook</h1>
                <p className={`${typography.pLead}`}>Bordellio is quite a complicated application, with a ton of features, and accounting for each possible state caveat in our UI is difficult. Thanks to Storybook, this is made easier. </p>
                <p className={`${typography.pLead}`}>We can spin up a seperate server from our main development one, and work on components which are isolated from the business logic and context of our app. This has allowed us to develop faster; with confidence that we’ve accounted for every possible use case. </p>
                <Feature video='images/storybook.mov' />
              </section>
              <section className={classes.section}>
                <h1 className={typography.t1}>Redux</h1>
                <p className={`${typography.pLead}`}>Redux makes it easier to manage our application our application state and speeds up development.</p>
                <p className={`${typography.pLead}`}>Because of redux we’re easily able to rehydrate the application state, allowing the app to instantly render data when we either refresh the page or return to it. The single state also means the data across our components are always in sync. </p>
                <p className={`${typography.pLead}`}>All we’re getting from the Redux store is a javascript object. This makes it easy for us to persist the state and allows us to do cool things like store conversations for reading offline - great for if an advertiser wanted to check an address or a person's ID when out of signal!</p>
              </section>
              <section className={classes.section}>
                <h1 className={typography.t1}>Tachyons</h1>
                <p className={`${typography.pLead}`}>Having worked on numerous projects, both large and small, I knew that the cascading nature of CSS makes it difficult to maintain styles overtime - especially with several people working on the same codebase. </p>
                <p className={`${typography.pLead}`}>I wanted to be able to quickly and confidently build out components without worrying about causing bugs in the rest of the app, so the functional approach to Tachyons appealed to me.</p>
                <p className={`${typography.pLead}`}>Functional just means having single purpose classes that are named based on their visual function. It makes it really easy to ensure styles are applied consistently throughout the app, reducing the chance of someone writing poor code.</p>
                <p className={`${typography.pLead}`}>For example, imagine you have a scale based on the powers of 2, your bottom margins would look like this:</p>
                <Feature image='images/tachyons1.png' />
                <p className={`${typography.pLead}`}>But then what if a colleague came along and added a rule which included a value outside of our scale?</p>
                <Feature image='images/tachyons2.png' />
                <p className={`${typography.pLead}`}>This would break our vertical rhythm and the design would suffer. With Tachyons, it’s much more difficult for issues like this to occur because developers are encouraged to implement functional css.</p>
              </section>
              <section className={classes.section}>
                <h1 className={typography.t1}>React-motion</h1>
                <p className={`${typography.pLead}`}>To really get the native feel, I wanted to make sure we were using springs to animate our components, so I ended up using the react-motion library in order to achieve this. </p>
                <p className={`${typography.pLead}`}>As the creator Cheng Leu said, “Set up a stiffness and damping for your UI element, and let the magic of physics take care of the rest. This way, you don't have to worry about petty situations such as interrupted animation behavior”.</p>
                <p className={`${typography.pLead}`}>This results in beautiful and natural micro-interactions, like so:</p>
                <Feature video='images/scroll.mov' />
              </section>
              <section className={classes.section}>
                <h1 className={typography.t1}>Open source project base</h1>
                <p className={`${typography.pLead}`}>We used react-redux-starter-kit as our base, which gave us security updates and features while it was still being developed. </p>
                <p className={`${typography.pLead}`}>We have forked this project so that we could tailor it to our needs by implementing technologies beneficial to us - one of them being Typescript. More on that below.</p>
              </section>
              <section className={classes.section}>
                <h1 className={typography.t1}>Typescript</h1>
                <p className={`${typography.pLead}`}>We’ve recently started converting over to TypeScript which has helped speed up development and raised the quality of our code by providing us with immediate syntax errors, incorrect types, and missing props, to name a few.</p>
                <p className={`${typography.pLead}`}>It’s also helped by giving us intellisense for third-party libraries. For example, when using a library like Moment, you’ll get helpers for which methods you can call:</p>
                <Feature video='images/intellisense.mov' />
              </section>
              <section className={classes.section}>
                <h1 className={typography.t1}>Next steps</h1>
                <p className={`${typography.pLead}`}>Primarily, my next steps will be focused on finishing the state of the UI while we prepare for our final rounds of usability testing before launch. This case study is a work in progress and will be updated in the future. </p>
                <p className={`${typography.pLead}`}>Thanks for reading!</p>
              </section>
            </div>
          </ContentContainer>
        </div>
      </Container>
    )
  }
}


export default BordellioDev

const Feature = ({ title, content, video, image }) => (
  <section className={`${classes.section} w-100`}>
    <h1 className={`${typography.t2} fw6 mb3`}>{title}</h1>
    { video ? 
      <video
        className="w-100"
        autoplay="true"
        loop="true"
        muted
        src={video}>
        Sorry, your browser doesn't support embedded videos.
      </video> 
      :
      null
    }
    {image ? <img className='mw-40 w-40-ns' src={image} /> : null }
    <p className={`${typography.pLead}`}>{content}</p>
  </section>
)