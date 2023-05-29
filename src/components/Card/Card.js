import React from 'react';
import './styles.scss';
import { Button } from 'antd';
import IMAGE from './png-transparent-wine-glass-red-wine-peppercorns-glass-wine-glass-wine.png';

const Card = () => {
  return (
    <div className="card">
      <img src={IMAGE} alt="" />
      <div className="card__actions">
        <Button>Шо то делать</Button>
      </div>
    </div>
  );
};

export default Card;
