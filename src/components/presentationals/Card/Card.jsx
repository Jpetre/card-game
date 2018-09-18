import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) =>
  <div className={`card ${props.isPlayable && 'isPlayable'} ${props.isTargetable && 'isTargetable'} ${props.isEnable && 'isEnable'}`}>
    <figure className="card_picture">
      <img src={props.pictureSrc} />
    </figure>
    <div className="card_body">
      <span className="card_name">{props.name}</span>
      <span className="card_cost">{props.cost}</span>
      <ul className="card_stats">
        <li>{props.atk}</li>
        <li>{props.pv}</li>
      </ul>
    </div>
  </div>

Card.propTypes = {
  name: PropTypes.string.isRequired,
  pictureSrc: PropTypes.string.isRequired,
  atk: PropTypes.number.isRequired,
  pv: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
  isPlayable: PropTypes.bool,
  isTargetable: PropTypes.bool,
  isEnable: PropTypes.bool
}

export default Card;
