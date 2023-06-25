import React, { memo, useEffect, useState } from 'react';
import { Button, Modal, Radio } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../api/usersApi';

const GoCard = ({ src, title, isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(false);
  const user = useSelector((state) => state.users.user);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (Object.keys(user).length) {
      setValue(user.isVisit);
    }
  }, [user]);

  const handleOk = () => {
    setIsModalOpen(false);

    dispatch(updateUser({ ...user, isVisit: value }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);

    dispatch(updateUser({ ...user, isVisit: value }));
  };

  return (
    <>
      <div className="card" onClick={showModal}>
        <img src={src} alt="" />
        <h3>{title}</h3>
      </div>

      <Modal title="Придете ли Вы на свадьбу ?" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={'modal modal__little'}>
        <div className={'modal__body'}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={true}>Я Обязательно приду!!!</Radio>
            <Radio value={false}>К сожалению нет...</Radio>
          </Radio.Group>
        </div>
        <div className={'modal__footer'}>
          <Button onClick={handleCancel}>Назад</Button>
          <Button onClick={handleOk}>ОК</Button>
        </div>
      </Modal>
    </>
  );
};

export default memo(GoCard);
