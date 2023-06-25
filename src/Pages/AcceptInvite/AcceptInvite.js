import React, { useContext, useEffect, useState } from 'react';
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
import { Button, List, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUser } from '../../api/usersApi';
import { PopupContext } from '../../utils/ModalContenxt';
import './acceptInvite.scss';

const AcceptInvite = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const { modal, setModal } = useContext(PopupContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
    setCurrentUser(localStorage.getItem('user'));
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setModal(false);
      dispatch(getUser(localStorage.getItem('user')));
    }
  }, []);

  const handleOk = () => {
    localStorage.setItem('user', currentUser);
    setModal(false);
    setIsModalOpen(true);
  };

  return (
    <div className="accept-invite">
      <div className="cards">
        <AlcoCard src={Wine} title={'Напитки'} />
        <DressCodeCard src={Mans} title={'Дресс-код'} />
        <GalleryCard src={Camera} title={'Галлерея'} />
        <GoCard src={Love} title={'Придешь не придешь ? '} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <WhenMyPosition src={Alien} title={'Где я сижу ?'} />
        <UploadCard src={Cloud} title={'Загрузить Фотографии'} />
      </div>

      <Modal footer={null} title="Выберите Себя из списка приглашенных" className={'modal '} open={modal}>
        <div className={'modal__body'}>
          <List
            dataSource={users}
            itemHeight={10}
            itemKey="firstName"
            pagination={true}
            renderItem={(item) => (
              <List.Item key={item.firstName} onClick={() => setCurrentUser(item.id)} className={`${currentUser === item.id ? 'active-row' : ''}`}>
                <List.Item.Meta
                  title={
                    <h3>
                      {item.firstName} {item.lastName}
                    </h3>
                  }
                />
              </List.Item>
            )}
          />
        </div>

        <div className={'modal__footer'}>
          <Button onClick={handleOk} disabled={!currentUser}>
            Продолжить
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AcceptInvite;
