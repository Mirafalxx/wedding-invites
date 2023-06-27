import React, { memo, useEffect, useState } from 'react';
import { Button, Checkbox, Modal } from 'antd';
import { updateUser } from '../../api/usersApi';
import { useDispatch, useSelector } from 'react-redux';

const DRINKS = ['Водка', 'Пиво', 'Вино', 'Шампанское', 'Виски', 'Текилла', 'Самбука'];

const AlcoCard = ({ src, title }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector((state) => state.users.user);
  const [drinks, setDrinks] = useState('');

  useEffect(() => {
    if (user.drinks) {
      setDrinks(user.drinks);
    }
  }, [user]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    dispatch(updateUser({ ...user, drinks }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const checkBoxHandler = (event, item) => {
    if (event) {
      setDrinks((prevDrinks) => (prevDrinks ? prevDrinks + ' ' + item : prevDrinks + item));
    } else {
      setDrinks((prevDrinks) => prevDrinks.replace(item, ''));
    }
  };

  return (
    <>
      <div className="card" onClick={showModal}>
        <img src={src} alt="" />
        <h3>{title}</h3>
      </div>

      <Modal
        title="Алкоголь- свадьба отличный повод чтобы выпить что ты предпочитаешь?"
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={'modal'}
      >
        <div className={'modal__body'}>
          {DRINKS.map((item) => (
            <Checkbox checked={drinks?.includes(item)} onClick={(event) => checkBoxHandler(event.target.checked, item)}>
              {item}
            </Checkbox>
          ))}
        </div>
        <div className={'modal__footer'}>
          <Button onClick={handleCancel}>Назад</Button>
          <Button onClick={handleOk}>ОК</Button>
        </div>
      </Modal>
    </>
  );
};

export default memo(AlcoCard);
