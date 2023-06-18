import React, { memo, useState } from 'react';
import { Button, Modal, Radio } from 'antd';

const GoCard = ({ src, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };

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

      <Modal title="Придете ли Вы на свадьбу ?" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={'modal modal__little'}>
        <div className={'modal__body'}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={true}>Я Обязательно приду!!!</Radio>
            <Radio value={false}>К сожалению нет...</Radio>
          </Radio.Group>
        </div>
        <div className={'modal__footer'}>
          <Button onClick={handleCancel}>Назад</Button>
          <Button onClick={handleCancel}>ОК</Button>
        </div>
      </Modal>
    </>
  );
};

export default memo(GoCard);
