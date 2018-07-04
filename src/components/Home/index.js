import React, { Component } from 'react';
import ContentContainer from '../ContentContainer'
import { ArrowDown } from '../Icons'
import { Keyframes, animated, config } from 'react-spring'

import delay from 'delay'


const classes = {
  h1: 'f1 fw6 lh-title ma0 pb3',
  subtitle: 'f4 lh-copy ma0 mb6'
}


// const fast = { ...config.stiff, restSpeedThreshold: 10, restDisplacementThreshold: 0.01 }

// // Creates a spring with predefined animation slots
// const Sidebar = Keyframes.Spring({
//   // Slots can take arrays/chains,
//   start: [
//     { delay: 500, from: { x: 0 }, to: { x: 1 }, config: config.slow },
//   ]
// })



// export const Home = style => (
//   <div 
//     className="mainRoute" 
//   style={
//     { ...style, 
//       backgroundColor: '#FFF87A',
//       color: '#2b2b2b'
//       }
//     }>
//     <ContentContainer>
//       <div className="mw8 pl6 pt6 mt6">
//         <Sidebar native state={state}>
//           {({ x }) => (
//             <animated.div className="sidebar" style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
//               <h1 className={classes.h1}>Daniel Caine is a full-stack designer from England</h1>
//               <p className={classes.subtitle}>Currently: Bordellio. Previously: SilverStripe, Levo and Reapit. <br /> Send me an <a href="#" className="underline color-inherit">email</a>, check my <a href="#" className="underline color-inherit">LinkedIn</a> profile, or download my <a href="#" className="underline color-inherit">CV</a>. <br /> Below is a selection of my work.</p>
//             </animated.div>
//           )}
//         </Sidebar>
//         <ArrowDown />
//       </div>
//     </ContentContainer>
//   </div>
// )


export class Home extends Component {
  render() {
    const { style } = this.props;
    return (
      <div
        className="mainRoute"
        style={
          {
            ...style,
            backgroundColor: '#FFF87A',
            color: '#2b2b2b'
          }
        }>
        <ContentContainer>
          <div className="mw8 pl6 pt6 mt6">
            <h1 className={classes.h1}>Daniel Caine is a full-stack designer from England</h1>
            <p className={classes.subtitle}>Currently: Bordellio. Previously: SilverStripe, Levo and Reapit. <br /> Send me an <a href="#" className="underline color-inherit">email</a>, check my <a href="#" className="underline color-inherit">LinkedIn</a> profile, or download my <a href="#" className="underline color-inherit">CV</a>. <br /> Below is a selection of my work.</p>
            <ArrowDown />
          </div>
        </ContentContainer>
      </div>
    )
  }
}


// class Home extends Component {
//   state = { open: undefined }
//   render() {
//     const state = this.state.open === undefined ? 'start' : this.state.open ? 'open' : 'close'
//     const { style } = this.props;
//     return (
//     <div 
//       className="mainRoute" 
//     style={
//       { ...style, 
//         backgroundColor: '#FFF87A',
//         color: '#2b2b2b'
//         }
//       }>
//       <ContentContainer>
//         <div className="mw8 pl6 pt6 mt6">
//           <Sidebar native state={state}>
//             {({ x }) => (
//               <animated.div className="sidebar" style={{ opacity: x.interpolate(x => x) }}>
//                 <h1 className={classes.h1}>Daniel Caine is a full-stack designer from England</h1>
//                 <p className={classes.subtitle}>Currently: Bordellio. Previously: SilverStripe, Levo and Reapit. <br /> Send me an <a href="#" className="underline color-inherit">email</a>, check my <a href="#" className="underline color-inherit">LinkedIn</a> profile, or download my <a href="#" className="underline color-inherit">CV</a>. <br /> Below is a selection of my work.</p>
//               </animated.div>
//             )}
//           </Sidebar>
//           <ArrowDown />
//         </div>
//       </ContentContainer>
//     </div>
//     )
//   }
// }

// export default Home;