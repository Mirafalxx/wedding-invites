import React, { useContext, useEffect, useMemo, useState } from 'react';
import UploadCard from '../../components/UploadCard/UploadCard';
import DressCodeCard from '../../components/DressCodeCard/DressCodeCard';
import GoCard from '../../components/GoCard/GoCard';
import AlcoCard from '../../components/AlcoCard/AlcoCard';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import WhenMyPosition from '../../components/WhenMyPosition/WhenMyPosition';
import { Button, List, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUser } from '../../api/usersApi';
import { PopupContext } from '../../utils/ModalContenxt';

import Wine from '../../images/icons/wine-1.png';
import Mans from '../../images/icons/dresses-1.png';
import Camera from '../../images/icons/gallery-1.png';
import Alien from '../../images/icons/chair-1.png';
import Cloud from '../../images/icons/camera-1.png';
import Love from '../../images/icons/igo-1.png';

import './acceptInvite.scss';

const AcceptInvite = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const { modal, setModal, setLoading } = useContext(PopupContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const users = useMemo(() => {
    return [...usersStore].sort((a, b) => a.firstName.localeCompare(b.firstName));
  }, [usersStore]);

  useEffect(() => {
    dispatch(fetchUsers());
    setCurrentUser(localStorage.getItem('user'));
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setModal(false);
      dispatch(getUser(localStorage.getItem('user')));
    } else {
      setModal(true);
    }
  }, [dispatch, setModal]);

  useEffect(() => {
    if (!loading) setLoading(false);
  }, [loading, setLoading]);

  const handleOk = () => {
    localStorage.setItem('user', currentUser);
    dispatch(getUser(currentUser));
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
              <List.Item
                key={item.firstName}
                onClick={() => setCurrentUser(item.id)}
                className={`${currentUser === item.id ? 'active-row' : ''}`}
              >
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
