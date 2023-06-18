import React, { useEffect, memo } from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../api/usersApi';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="gallery">
      <Link className={"gallery__link"} to={'/'}>Вернуться назад</Link>
      {images.length ? images.map((item, index) => <PhotoCard key={index} src={item.url} images={images} />) : null}
    </div>
  );
};

export default memo(Gallery);
