import Modal from "react-modal";

function PDFModal({ isOpen, onClose, pdfUrl }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="PDF Modal">
      <iframe
        title="PDF Viewer"
        style={{ width: "100%", height: "100%",padding:50}}
        src={pdfUrl}
      />
    </Modal>
  );
}

export default PDFModal;