import React from 'react'
import { connect } from 'react-redux'

import { Card } from '../../components/Card/Card'

export const CardContainer = ({ houses }) => {

  const houseCards = houses.map((house, i) => <Card {...house} key={i + Date.now()} />)

  return (
    <div className="card-container">
      {houseCards}
    </div>
  )
}

export const mapStateToProps = state => ({
  houses: state.houses
})

export default connect(mapStateToProps)(CardContainer);