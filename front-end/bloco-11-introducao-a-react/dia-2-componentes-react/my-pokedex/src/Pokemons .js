/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from 'prop-types';


class Pokemons extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {card} = this.props
    return(
        <div key = {card.name}>
          <p>{card.name}</p>
          <p>{card.type}</p>
          <p>{card.averageWeight.value} {this.props.card.averageWeight.measurementUnit}</p>
          <img src={card.image}></img>
        </div>
    )
  }
}

Pokemons.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  })
}
export default Pokemons; 