import React, { useState } from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import Form from 'react-bootstrap/Form';
import { FilterType } from '../../../types/filter';
import FlagButton from '../../Filters/LanguageFilter/FlagButton';
import { AvailableLanguage } from '../../../types/course';
import styled from 'styled-components';

type Props = {
  isOpen: boolean,
  onClose: () => void,
  onSubmit: (FilterType) => void,
  filters: FilterType
}

const InlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`;

const ModalWithFilters = ({ isOpen, onClose, onSubmit, filters } : Props) => {
  const { text, language } = filters;
  const [inputValue, setInputValue] = useState(text || '');
  const [languageFilterValue, setLanguageFilterValue] = useState(language);

  const handleOnSubmit = () => {
    onSubmit({ text: inputValue, language: languageFilterValue });
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleLanguageSelect = (newValue) => {
    setLanguageFilterValue(newValue);
  };

  const filtersElement = (
    <>
      <Form.Control
        type='text'
        placeholder='Enter course name'
        value={inputValue}
        onChange={handleInputChange}
      />

      <InlineWrapper>
        {AvailableLanguage.map((lang  ) => (
          <FlagButton
            lang={lang}
            onClick={handleLanguageSelect}
            active={lang === languageFilterValue}
            key={lang}
          />
        ))}
      </InlineWrapper>
    </>
  );

  return (
    <ModalComponent
      isOpen={isOpen}
      onSubmit={handleOnSubmit}
      onClose={onClose}
      childElement={filtersElement}
      title='Manage Filters'
      centered
      size='lg'
    />
  );
};

export default ModalWithFilters;
