import React, { memo, useState } from 'react';
import { Button, Modal } from 'antd';
import IMG from './img.jpeg';

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
          <h3> Добрый день, уважаемый гость !</h3>
          <p> Мы рады приветствовать Вас и благодарим за то, что Вы поставили наш сайт. Будем очень благодарны , если вы поддержите стиль и цвет нашей свадьбы в своих нарядах.</p>
          <img src={IMG} alt="" />
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
