import React, { useState, memo } from 'react';
import './style.scss';
import { Image } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteImages } from '../../api/uploadApi';

const PhotoCard = ({ src, images, isAdmin, id }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

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
      <Image preview={{ visible: false }} width={200} src={src} onClick={() => setVisible(true)} />
      <div className="photo-item__hidden">
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {images.map((item, index) => (
            <Image src={item.url} key={index} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default memo(PhotoCard);
