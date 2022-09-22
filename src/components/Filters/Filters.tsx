import React, { useState } from 'react';
import { ButtonWrapper, TitleWrapper, Header, Wrapper } from './Filters.model';

import searchIcon from './icons/search.svg';

import ModalWithInput from "./Modal/Modal";

type Props = {
  onChange: (FilterType) => void
}

const Filters = ({ onChange } : Props)  => {
  const [textSearchValue, setTextSearchValue] = useState('');
  const [isSearchTextModalOpen, setIsSearchTextModalOpen]= useState(false);

  const handleTextSearch = () => {
    setIsSearchTextModalOpen(true);
  };

  const handleOnSubmit = (value) => {
    onChange({ text: value });
    setTextSearchValue(value);
    setIsSearchTextModalOpen(false);
  };

  return (
    <Wrapper>
      <Header>
        <TitleWrapper>Courses</TitleWrapper>
        <ButtonWrapper onClick={handleTextSearch}><img src={searchIcon} alt='search button'/></ButtonWrapper>
      </Header>

      {isSearchTextModalOpen && (
        <ModalWithInput
          isOpen={isSearchTextModalOpen}
          onClose={() => setIsSearchTextModalOpen(false)}
          onSubmit={handleOnSubmit}
        />
      )}

    </Wrapper>
  );
};

export default Filters;
