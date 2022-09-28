import React, { useState } from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import Form from 'react-bootstrap/Form';

type Props = {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (FilterType) => void,
  lastInputValue?: string | null
}

const ModalWithInput = ({ isOpen, onClose, onSubmit, lastInputValue } : Props) => {
  const [inputValue, setInputValue] = useState(lastInputValue || '');

  const handleOnSubmit = () => {
    onSubmit({ text: inputValue });
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const inputElement = (
    <Form.Control
      type='text'
      placeholder='Enter course name'
      value={inputValue}
      onChange={handleInputChange}
    />
  );

  return (
    <ModalComponent 
      isOpen={isOpen} 
      onSubmit={handleOnSubmit}
      onClose={onClose} 
      childElement={inputElement}
      title='Search for courses'
    />
  );
};

export default ModalWithInput;
