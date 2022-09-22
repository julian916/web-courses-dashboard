import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

type Props = {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (string) => void
}

const ModalWithInput = ({ isOpen, onClose, onSubmit } : Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleClose = () => onClose();
  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search for courses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type='text'
            placeholder='Enter course name'
            value={inputValue}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' id='close' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' id='submit' onClick={handleSubmit}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWithInput;
