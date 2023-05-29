import React, { memo, useState } from 'react';
import { Button, Checkbox, Modal } from 'antd';

const GoCard = ({ src, title }) => {
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

      <Modal title="Придете ли Вы на свадьбу ?" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={'modal'}>
        <div className={'modal__body'}>
          <Checkbox>Я Обязательно приду 🚀🚀🚀🚀🚀 </Checkbox>
          <Checkbox>Я гафняшка не приду 🦐🦐🦐🦐🦐</Checkbox>
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