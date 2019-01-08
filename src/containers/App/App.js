import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchHouses } from '../../thunks/fetchHouses'

import { CardContainer } from '../CardContainer/CardContainer'

class App extends Component {

  async componentDidMount() {
    const url = 'http://localhost:3001/api/v1/houses'
    await this.props.fetchHouses(url)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <CardContainer />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   houses: state.houses,
//   error: state.error,
//   isLoading: state.isLoading
// })

const mapDispatchToProps = dispatch => ({
  fetchHouses: (url) => dispatch(fetchHouses(url))
})

export default connect(null, mapDispatchToProps)(App);
