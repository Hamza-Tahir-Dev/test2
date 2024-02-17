// components/PDFUploader.js
import React, { useCallback } from 'react';

const PDFUploader = ({ onFileUpload }) => {
  const handleFileChange = useCallback((e) => {
    onFileUpload(e.target.files[0]);
  }, [onFileUpload]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();

    if (e.dataTransfer.items && e.dataTransfer.items[0]) {
      const droppedFile = e.dataTransfer.items[0].getAsFile();
      onFileUpload(droppedFile);
    }
  }, [onFileUpload]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <label
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        display: 'block',
        border: '2px dashed #cccccc',
        borderRadius: '4px',
        padding: '20px',
        cursor: 'pointer',
      }}
    >
      <p>Drag and drop a PDF file here or click to select one.</p>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </label>
  );
};

export default PDFUploader;
