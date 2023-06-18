import React, { useState, memo } from 'react';
import './style.scss';
import { Image } from 'antd';

const PhotoCard = ({ src, images }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="photo-item">
      <Image preview={{ visible: false }} width={200} src={src} onClick={() => setVisible(true)} />
      <div className="photo-item__hidden">
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {images.map((item) => (
            <Image src={item.url} />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default memo(PhotoCard);
