import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className ='card-container'>
      <img 
      alt='monster' 
      src = {`https://robohash.org/${props.food.id}?set=set2&size=180x180`} 
      />
      <h2> {props.food.name} </h2>
      <p>{props.food.email}</p>
    </div>
);