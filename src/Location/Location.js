import React, { useEffect, useState } from 'react';
import './location.scss';

const Location = ({ seats = [] }) => {
  const [state, setState] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const calculateState = () => {
      // Итерируемся по каждому числу в массиве
      for (let i = 0; i < seats.length; i++) {
        // Делим число на 12 и округляем вверх с помощью функции Math.ceil
        const dividedNumber = Math.ceil(seats[i] / 12);

        // Добавляем 1 к соответствующему состоянию
        if (dividedNumber >= 1 && dividedNumber <= 6) {
          setState((prevState) => {
            const newState = [...prevState];
            newState[dividedNumber - 1] += 1;
            return newState;
          });
        }
      }
    };

    calculateState();

    return () => {
      setState([0, 0, 0, 0, 0, 0]);
    };
  }, [seats]);

  return (
    <div className="location">
      <div className="location__presidium">Президиум</div>

      <div className={`table table-1 ${state[0] ? 'table__active' : ''}`}>
        {' '}
        <p>
          Номер Стола: <b>1</b>
        </p>{' '}
        <span>Кол-во Мест:{state[0]}</span>{' '}
      </div>
      <div className={`table table-2 ${state[1] ? 'table__active' : ''}`}>
        {' '}
        <p>
          Номер Стола: <b>2</b>
        </p>{' '}
        <span>Кол-во Мест:{state[1]}</span>{' '}
      </div>
      <div className={`table table-3 ${state[2] ? 'table__active' : ''}`}>
        {' '}
        <p>
          Номер Стола: <b>3</b>
        </p>{' '}
        <span>Кол-во Мест:{state[2]}</span>{' '}
      </div>
      <div className={`table table-4 ${state[3] ? 'table__active' : ''}`}>
        {' '}
        <p>
          Номер Стола: <b>4</b>
        </p>{' '}
        <span>Кол-во Мест:{state[3]}</span>{' '}
      </div>
      <div className={`table table-5 ${state[4] ? 'table__active' : ''}`}>
        {' '}
        <p>
          Номер Стола: <b>5</b>
        </p>{' '}
        <span>Кол-во Мест:{state[4]}</span>{' '}
      </div>
      <div className={`table table-6 ${state[5] ? 'table__active' : ''}`}>
        {' '}
        <p>
          {' '}
          <b>Детский Стол</b>
        </p>{' '}
        <span>Кол-во Мест:{state[5]}</span>{' '}
      </div>

      <div className={'location__exit'}>Вход/Выход</div>
    </div>
  );
};

export default Location;
