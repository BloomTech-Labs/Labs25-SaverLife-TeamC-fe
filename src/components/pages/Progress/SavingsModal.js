import React from 'react';
import Modal from 'react-modal';
import SavingsForm from './SavingsForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '20%',
    fontSize: '20px',
  },
};

function SavingsModal() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#c01089';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>click to save</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Savings Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>
          How much would you like to save?
        </h2>
        <SavingsForm />
        <button onClick={closeModal}>cancel</button>
      </Modal>
    </div>
  );
}

export default SavingsModal;
