import React, { memo } from 'react';
import { Image } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteImages } from '../../api/uploadApi';
import ImageDownloadButton from '../DownLoadButton/DownLoadButton';
import './style.scss';

const PhotoCard = ({ src, isAdmin, id }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteImages(id));
  };

  return (
    <div className="photo-item">
      {isAdmin && (
        <button className={'admin__btn'} onClick={deleteHandler}>
          Удалить фото
        </button>
      )}

      <ImageDownloadButton imageUrl={src} />

      <Image width={200} src={src} />
    </div>
  );
};

export default memo(PhotoCard);
