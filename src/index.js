import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AboutMe from './views/about-me'
import Appraise from './views/appraise'
import Home from './views/home'
import LearningHub from './views/learning-hub'
import Playground from './views/playground'
import ServiceDeskManagement from './views/service-desk-management'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={AboutMe} path="/about-me" />
        <Route exact component={Appraise} path="/appraise" />
        <Route exact component={Home} path="/" />
        <Route exact component={LearningHub} path="/learning-hub" />
        <Route exact component={Playground} path="/playground" />
        <Route exact component={ServiceDeskManagement} path="/service-desk-management" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
