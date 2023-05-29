import React from 'react';
import { useNavigate } from 'react-router-dom';

const GalleryCard = ({ src, title }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate('/invite-users')}>
      <img src={src} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default GalleryCard;
