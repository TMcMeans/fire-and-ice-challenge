import React from 'react'

export const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {

  if (founded.includes('Targaryen')) {
    founded = 'Before the Doom of Valyria'
  }

  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>{words}</h2>
      <h3>Founded: {founded === '' ? 'N/A' : founded}</h3>
      <h3>Seats: {seats.join(', ')}</h3>
      <h3>Titles: {titles.join(', ')}</h3>
      <h3>Ancestral Weapons: {ancestralWeapons.join(', ')}</h3>
      <h3>Coat of Arms: {coatOfArms}</h3>
    </div>
  )
}