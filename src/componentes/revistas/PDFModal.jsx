import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root'); // Esto asegura que el modal esté accesible

function PDFModal({ isOpen, onClose, pdfUrl }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
    }
  }, [isOpen]);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleBack = () => {
    onClose();  // Cierra el modal
    if (window.history.length > 2) { // Si hay más de una página en el historial
      navigate(-1); // Navega a la página anterior
    } else {
      navigate('/'); // Si no hay una página anterior, navega a la página de inicio
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="PDF Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
        }
      }}
    >
      <button
        onClick={handleBack}
        className="button is-primary"
        style={{ alignSelf: 'flex-end', marginBottom: '10px' }}
      >
        Atrás
      </button>
      {loading && (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
      )}
      <iframe
        title="PDF Viewer"
        style={{ flex: 1, width: '100%', display: loading ? 'none' : 'block' }}
        src={pdfUrl}
        onLoad={handleLoad}
      />
    </Modal>
  );
}

export default PDFModal;
