import React from 'react';

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div style={{ height: '450px' }}> {/* Set the desired height value */}
      <h2>Uploaded PDF</h2>
      {pdfUrl && (
        <div dangerouslySetInnerHTML={{ __html: pdfUrl }} style={{ height: '100%' }} />
      )}
    </div>
  );
};

export default PDFViewer;