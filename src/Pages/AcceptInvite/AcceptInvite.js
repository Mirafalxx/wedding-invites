import React from 'react';
import UploadCard from '../../components/UploadCard/UploadCard';

import Wine from '../../assets/icons/wine.png';
import Mans from '../../assets/icons/dresses.png';
import Camera from '../../assets/icons/gallery.png';
import Alien from '../../assets/icons/chair.png';
import Cloud from '../../assets/icons/camera.png';
import Love from '../../assets/icons/igo.png';
import DressCodeCard from '../../components/DressCodeCard/DressCodeCard';
import GoCard from '../../components/GoCard/GoCard';
import AlcoCard from '../../components/AlcoCard/AlcoCard';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import WhenMyPosition from '../../components/WhenMyPosition/WhenMyPosition';

import './acceptInvite.scss';

const AcceptInvite = () => {
  return (
    <div className="accept-invite">
      <div className="cards">
        <AlcoCard src={Wine} title={'Напитки'} />
        <DressCodeCard src={Mans} title={'Дресс-код'} />
        <GalleryCard src={Camera} title={'Галлерея'} />
        <GoCard src={Love} title={'Придешь не придешь ? '} />
        <WhenMyPosition src={Alien} title={'Где я сижу ?'} />
        <UploadCard src={Cloud} title={'Загрузить Фотографии'} />
      </div>
    </div>
  );
};

export default AcceptInvite;
