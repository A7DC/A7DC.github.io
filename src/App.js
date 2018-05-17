import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const App = () => (
  <app>
    <navigation>
      <Link to="/"><button>hello</button></Link>
      <Link to="/goodbye"><button>goodbye</button></Link>
    </navigation>
  </app>
)

export default App;
