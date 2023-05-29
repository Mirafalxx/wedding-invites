import React, { memo, useState } from 'react';
import { Button, Modal } from 'antd';
import Location from '../../Location/Location';

const WhenMyPosition = ({ src, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card" onClick={showModal}>
        <img src={src} alt="" />
        <h3>{title}</h3>
      </div>

      <Modal title="Где Я сижу?" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={'modal modal__location'}>
        <div className={'modal__body'}>
          <Location />
        </div>
        <div className={'modal__footer'}>
          <Button onClick={handleCancel}>Назад</Button>
          <Button onClick={handleCancel}>ОК</Button>
        </div>
      </Modal>
    </>
  );
};

export default memo(WhenMyPosition);
