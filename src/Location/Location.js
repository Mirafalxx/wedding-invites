import React from 'react';
import './location.scss';

const chair = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Location = ({ activeTable = null }) => {
  return (
    <div className="location">
      <div className="location__presidium">
        <div className="chair">1</div>
        <div className="chair">2</div>
        <div className="chair">3</div>
        <div className="chair">4</div>
      </div>

      <div className="table table-1">
        {chair.map((item) => (
          <div className={`chair`}>{item}</div>
        ))}
      </div>
      <div className="table  table-2">
        {chair.map((item) => (
          <div className={'chair'}>{item}</div>
        ))}
      </div>
      <div className="table  table-3">
        {chair.map((item) => (
          <div className={'chair'}>{item}</div>
        ))}
      </div>
      <div className="table  table-4">
        {chair.map((item) => (
          <div className={'chair'}>{item}</div>
        ))}
      </div>
      <div className="table  table-5">
        {chair.map((item) => (
          <div className={'chair'}>{item}</div>
        ))}
      </div>
      <div className="table  table-6">
        {chair.map((item) => (
          <div className={'chair'}>{item}</div>
        ))}
      </div>

      <div className={'location__exit'}>Вход/Выход</div>
    </div>
  );
};

export default Location;
