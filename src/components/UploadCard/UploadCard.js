import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { uploadImages } from '../../api/uploadApi';

const UploadCard = ({ src, title }) => {
  const dispatch = useDispatch();
  const inputRef = React.useRef();

  const activateInput = () => {
    inputRef.current?.click();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files;
    const reader = new FileReader();
    dispatch(uploadImages(file));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const onFileChange = (e) => {
    dispatch(uploadImages(e.target.files));
  };

  return (
    <>
      <div className="card" onDrop={handleDrop} onDragOver={handleDragOver} onClick={activateInput}>
        <img src={src} alt="icon-card-button" />
        <h3>{title}</h3>
      </div>
      <input type="file" onChange={onFileChange} ref={inputRef} style={{ display: 'none' }} multiple accept={`image/*`} />
    </>
  );
};

export default memo(UploadCard);
