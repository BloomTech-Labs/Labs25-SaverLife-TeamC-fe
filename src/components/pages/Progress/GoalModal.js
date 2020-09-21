import React from 'react';
import Modal from 'react-modal';
import GoalForm from './GoalForm';

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

function GoalModal() {
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
      <button onClick={openModal}>edit savings goal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Savings Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>
          Edit your savings goal!
        </h2>
        <GoalForm />
        <button onClick={closeModal}>cancel</button>
      </Modal>
    </div>
  );
}

export default GoalModal;
