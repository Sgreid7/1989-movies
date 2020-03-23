import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './images/logo.svg'
import './App.css'

import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'
import Filter from './Filter'

const App = () => (
  <Router>
    <section className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h1>Best Movies of 1989</h1>
        {/* <Filter /> */}
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </section>
  </Router>
)

export default App
