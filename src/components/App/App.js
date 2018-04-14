import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Banner from '../Banner'
import Header from '../Header'
import Info from '../Info'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Header />

        <Switch>
          <Route exact path='/' />
          <Route path='/information' component={Info} />
        </Switch>

      </div>
    );
  }
}

export default App
