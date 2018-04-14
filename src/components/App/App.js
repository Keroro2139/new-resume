import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Banner from '../Banner'
import Header from '../Header'
import Info from '../Info'
import Skill from '../Skill'
import Experience from '../Experience'
import Education from '../Education'
import Project from '../Project'
import About from '../About'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Header />

        <Switch>
          <Route exact path='/' />
          <Route path='/information' component={Info} />
          <Route path='/skill' component={Skill} />
          <Route path='/experience' component={Experience} />
          <Route path='/education' component={Education} />
          <Route path='/project' component={Project} />
          <Route path='/about' component={About} />
        </Switch>

      </div>
    );
  }
}

export default App
