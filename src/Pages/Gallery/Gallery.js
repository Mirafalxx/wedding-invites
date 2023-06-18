import React, { useEffect } from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from '../../api/usersApi';

const Gallery = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);

  console.log(images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="gallery">
      {[0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5].map((item, index) => (
        <PhotoCard key={index} />
      ))}
    </div>
  );
};

export default Gallery;
