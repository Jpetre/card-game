import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';
import { Droppable, Draggable } from 'react-beautiful-dnd';

class Hand extends Component {
  render() {
    const {
      cards,
      droppableId,
      isDragDisabled
    } = this.props;
    return (
      <div className="hand">
        <Droppable droppableId={droppableId} direction="horizontal">
          {(provided, snapshot) => (
            <div
              className="hand_container"
              ref={provided.innerRef}
            >
              {
                cards.length > 0 && cards.map((card, index) => 
                  <Draggable 
                    key={`card_hand_${this.props.player}_${index}`}
                    draggableId={`card_hand_${this.props.player}_${index}`}
                    index={index}
                    isDragDisabled={isDragDisabled}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card 
                          name={card.name}
                          pictureSrc={card.pictureSrc}
                          atkDistance={card.atkDistance}
                          armor={card.armor}
                          atkMelee={card.atkMelee}
                          pv={card.pv}
                          cost={card.cost}
                        />
                      </div>
                    )}
                  </Draggable>
                )
              }
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

Hand.propTypes = {
  cards: PropTypes.array,
  player: PropTypes.string,
  droppableId: PropTypes.string,
  isDragDisabled: PropTypes.bool
}

export default Hand;
