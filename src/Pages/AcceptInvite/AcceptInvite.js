import React from 'react';
import Card from '../../components/Card/Card';
import Wine from '../../assets/123.png';
import Mans from '../../assets/mans.png';
import Camera from '../../assets/camera2.png';
import Alien from '../../assets/alien.png';
import Cloud from '../../assets/download.png';
import Love from '../../assets/love.svg';
import './acceptInvite.scss';
import DressCodeCard from '../../components/DressCodeCard/DressCodeCard';
import GoCard from '../../components/GoCard/GoCard';
import AlcoCard from '../../components/AlcoCard/AlcoCard';

const AcceptInvite = () => {
  return (
    <div className="accept-invite">
      <div className="cards">
        <AlcoCard src={Wine} title={'Напитки'} />
        <DressCodeCard src={Mans} title={'Дресс-код'} />
        <Card src={Camera} title={'Галлерея'} />
        <GoCard src={Love} title={'Придешь не придешь ? '} />
        <Card src={Alien} title={'Где я сижу ?'} />
        <Card src={Cloud} title={'Загрузить Фотографии'} />
      </div>
    </div>
  );
};

export default AcceptInvite;
