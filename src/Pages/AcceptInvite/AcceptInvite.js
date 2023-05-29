import React from 'react';
import Card from '../../components/Card/Card';
import './acceptInvite.scss';
import Wine from '../../assets/123.png';
import Mans from '../../assets/mans.png';
import Camera from '../../assets/camera2.png';
import Alien from '../../assets/alien.png';
import Cloud from '../../assets/download.png';
import Love from '../../assets/love.svg';

const AcceptInvite = () => {
  return (
    <div className="accept-invite">
      <div className="cards">
        <Card src={Wine} title={'Напитки'} />
        <Card src={Mans} title={'Дрескот'} />
        <Card src={Camera} title={'Галлерея'} />
        <Card src={Love} title={'Придешь не придешь ? '} />
        <Card src={Alien} title={'Где я сижу ?'} />
        <Card src={Cloud} title={'Загрузить Фотографии'} />
      </div>
    </div>
  );
};

export default AcceptInvite;
