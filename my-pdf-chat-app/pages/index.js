// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import PDFUploader from '../components/PDFUploader';
import PDFViewer from '../components/PDFViewer';
import { useState } from 'react';

const loadPDF = (file, setUploadedPDF) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    setUploadedPDF(`<embed src="${e.target.result}" type="application/pdf" width="100%" height="100%" />`);
  };

  reader.readAsDataURL(file);
};

export default function Home() {
  const [uploadedPDF, setUploadedPDF] = useState(null);
  const [chatMessage, setChatMessage] = useState('');

  const handleFileUpload = (file) => {
    if (file && file.type === 'application/pdf') {
      loadPDF(file, setUploadedPDF);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Handle sending the chat message (e.g., through an API call)
    console.log('Sending message:', chatMessage);
    // Reset the chat input
    setChatMessage('');
  };

  return (
    <div>
      <Head>
        <title>PDF Chat</title>
      </Head>

      <Header />

      <main>
        <PDFUploader onFileUpload={handleFileUpload} />
        <div style={sectionsContainerStyles}>
          <div style={sectionStyles}>
            <PDFViewer pdfUrl={uploadedPDF} />
          </div>
          <div style={sectionStyles}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ flex: 1 }}>
                <h2>Chat</h2>
                {/* Your chat UI can be added here */}
              </div>
              <div style={{ marginBottom: '10px' }}>
                <textarea
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={handleChatMessageChange}
                />
              </div>
              <div>
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const sectionsContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
};

const sectionStyles = {
  flex: 1,
  padding: '20px',
  height: '500px',  // Set the desired height value
  border: '1px solid #cccccc',
  borderRadius: '4px',
};
