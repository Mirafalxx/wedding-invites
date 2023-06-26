import React from 'react';

const ImageDownloadButton = ({ imageUrl }) => {
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg';
    link.click();
  };

  return (
    <button className="btn__download" onClick={downloadImage}>
      Скачать изображение
    </button>
  );
};

export default ImageDownloadButton;
