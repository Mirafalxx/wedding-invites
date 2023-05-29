import React, { memo, useState } from 'react';
import { Button, Modal } from 'antd';

const DressCodeCard = ({ src, title }) => {
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

      <Modal title="Дресс-код" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={'modal'}>
        <div className={'modal__body'}>
          Тестер 228 фыворфыоврфыоврфыорворфыоврфыорвфоывфы Тестер 228 фыворфыоврфыоврфыорворфыоврфыорвфоывфы Тестер 228 фыворфыоврфыоврфыорворфыоврфыорвфоывфы Тестер 228
          фыворфыоврфыоврфыорворфыоврфыорвфоывфы Тестер 228 фыворфыоврфыоврфыорворфыоврфыорвфоывфы Тестер 228 фыворфыоврфыоврфыорворфыоврфыорвфоывфы Тестер 228
          фыворфыоврфыоврфыорворфыоврфыорвфоывфы Тестер 228 фыворфыоврфыоврфыорворфыоврфыорвфоывфы
        </div>
        <div className={'modal__footer'}>
          <Button onClick={handleCancel}>Назад</Button>
          <Button onClick={handleCancel}>ОК</Button>
        </div>
      </Modal>
    </>
  );
};

export default memo(DressCodeCard);
