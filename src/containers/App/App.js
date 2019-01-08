import React, { Component } from 'react';
import logo from './logo.svg';
import wolf from './wolf.gif';
import './App.css';
import { connect } from 'react-redux'
import { fetchHouses } from '../../thunks/fetchHouses'

import CardContainer from '../CardContainer/CardContainer'
import { Card } from '../../components/Card/Card'

class App extends Component {

  async componentDidMount() {
    const url = 'http://localhost:3001/api/v1/houses'
    await this.props.fetchHouses(url)
  }

  render() {
    const { isLoading, error } = this.props
    let display;

    if (isLoading) {
      display = <img src={wolf} alt="wolf-gif"></img>
    } else {
      display = <CardContainer />
    }

    if (error) {
      return (
        <h1>{error}</h1>
      )
    } else {
      return (
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to Westeros</h2>
          </div>
          <div className='Display-info'>
            {display}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  houses: state.houses,
  error: state.error,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchHouses: (url) => dispatch(fetchHouses(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
