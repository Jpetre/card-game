import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) =>
  <div className="card">
    <figure className="card_picture">
      <img src={props.pictureSrc} />
    </figure>
    <div className="card_body">
      <span className="card_name">{props.name}</span>
      <span className="card_cost">{props.cost}</span>
      <ul className="card_stats">
        <li>{props.atkDistance}</li>
        <li>{props.armor}</li>
        <li>{props.atkMelee}</li>
        <li>{props.pv}</li>
      </ul>
    </div>
  </div>

Card.propTypes = {
  name: PropTypes.string.isRequired,
  pictureSrc: PropTypes.string.isRequired,
  atkDistance: PropTypes.number.isRequired,
  armor: PropTypes.number.isRequired,
  atkMelee: PropTypes.number.isRequired,
  pv: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
}

export default Card;
