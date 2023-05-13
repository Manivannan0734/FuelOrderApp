import React from 'react';
import Card from './Card';
import './CardsContainer.css';

const CardsContainer = () => {
  return (
    <div className="cards-container">
      <Card 
      
        title="PETROL"
        description="This field especially for diesel only"
        image ="https://purepng.com/public/uploads/large/anime-girl-5wx.png" 
      />
      <Card 
        image="https://placehold.it/300x200"
        title="DIESEL"
        description="This field especially for diesel only"
      />
      <Card 
        image="https://placehold.it/300x200"
        title="TYRE"
        description="This includes all the problems arised in tyres of the vehicle"
      />
      <Card 
        image="https://placehold.it/300x200"
        title="ENGINE FAULT"
        description="Include all physical equipment in bike or cars "
      />
    </div>
  );
};

export default CardsContainer;
