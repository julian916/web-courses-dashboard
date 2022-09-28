import React, { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type Props = {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (any) => void
  childElement: ReactElement,
  title: string,
  centered?: boolean,
  size?: 'sm' | 'lg' | 'xl'
}

const ModalComponent = ({ isOpen, onClose, onSubmit, childElement, title, centered, size } : Props) => (
  <Modal show={isOpen} onHide={onClose} centered={centered} size={size}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {childElement}
    </Modal.Body>
    <Modal.Footer>
      <Button variant='secondary' id='close' onClick={onClose}>
        Cancel
      </Button>
      <Button variant='primary' id='submit' onClick={onSubmit}>
        Submit
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ModalComponent;
