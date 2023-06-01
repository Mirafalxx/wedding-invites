import React from 'react';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import './styles.scss';

const Gallery = () => {
  return (
    <div className="gallery">
      {[0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5].map((item) => (
        <PhotoCard key={item} />
      ))}
    </div>
  );
};

export default Gallery;
