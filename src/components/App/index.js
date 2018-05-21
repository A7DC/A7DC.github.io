import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import styles from './styles.css'

import { Transition, config, animated } from 'react-spring'

// components
import { Navigation } from '../Navigation';

// import { About } from '../About';
// import { Home } from '../Home';

const location = window.location

export const App = ({location}) =>
    console.log('location', location) || (
    <Router>
      <Route
        render={({ location}) => (
          <div className="fill">
            <Route 
              exact 
              path="/" 
              />
            <Navigation />
            <div className="content">
              <Transition
                keys={location.pathname}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {style => (
                  <Switch location={location}>
                    <Route exact path="/" render={props => Home({ ...props, style })} />
                    <Route path="/about" render={props => About({ ...props, style })} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                )}
              </Transition>
            </div>
          </div>
        )}
      />
    </Router>
  )


const Home = style => <div  className="mainRoute" style={{ ...style, backgroundColor: '#d32f2f' }}>Home</div>

const About = style => <div  className="mainRoute" style={{ ...style, backgroundColor: '#4CAF50' }}>About</div>

// export const App = () =>
//   console.log('App') || (
//     <Router>
//       <Route
//         render={({ location }) => (
//           <div className="fill">
//             <Route 
//               exact 
//               path="/" 
//               />
//             <Navigation />
//             <div className="content">
//               <Transition
//                 native
//                 config={{ tension: 1, friction: 10 }}
//                 keys={location.pathname.split('/').filter(a => a)[0]}
//                 from={{ transform: 'translateY(500px)', opacity: 0 }}
//                 enter={{ transform: 'translateY(0px)', opacity: 1 }}
//                 leave={{ transform: 'translateY(500px)', opacity: 0 }}>
//                 {style => (
//                   <Switch location={location}>
//                     <Route exact path="/" render={props => Home({ ...props, style })} />
//                     <Route path="/about" render={props => About({ ...props, style })} />
//                     <Route render={() => <div>Not Found</div>} />
//                   </Switch>
//                 )}
//               </Transition>
//             </div>
//           </div>
//         )}
//       />
//     </Router>
//   )

// export const App = props => (
//   <Router>
//     <div>
//       <Navigation />
//         <Transition
//         native
//         config={{ tension: 1, friction: 10 }}
//         from={{ transform: 'translateY(500px)', opacity: 0 }}
//         enter={{ transform: 'translateY(0px)', opacity: 1 }}
//         leave={{ transform: 'translateY(500px)', opacity: 0 }}>
//           {style => (
//             <Switch>
//             <Route exact path="/" render={props => Home({ ...props, style })} />
//             <Route path="/about" render={props => About({ ...props, style })} />
//             </Switch>
//           )}
//         </Transition>
//     </div>
//   </Router>
// )
