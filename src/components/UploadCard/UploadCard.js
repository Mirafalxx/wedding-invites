import React, { memo, useState } from 'react';

const UploadCard = ({ src, title }) => {
  const [files, setFiles] = useState([]);
  const inputRef = React.useRef();
  console.log(files);
  const activateInput = () => {
    inputRef.current?.click();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files;
    const reader = new FileReader();
    setFiles(file);
    reader.onload = (e) => {};
    //
    // reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const onFileChange = (e) => {
    setFiles(...e.target.files);
  };

  return (
    <>
      <div className="card" onDrop={handleDrop} onDragOver={handleDragOver} onClick={activateInput}>
        <img src={src} alt="icon-card-button" />
        <h3>{title}</h3>
      </div>
      <input type="file" onChange={onFileChange} ref={inputRef} style={{ display: 'none' }} multiple />
    </>
  );
};

export default memo(UploadCard);
