import React, { useEffect, memo } from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../api/uploadApi';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';

const Gallery = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);
  const loading = useSelector((state) => state.images.loading);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="gallery">
      <Link className={'gallery__link'} to={'/'}>
        Вернуться назад
      </Link>
      {images.length ? images.map((item, index) => <PhotoCard key={index} src={item.url} images={images} />) : null}
      {loading && <Spinner />}
    </div>
  );
};

export default memo(Gallery);
