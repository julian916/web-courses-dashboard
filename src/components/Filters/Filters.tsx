import React, { useState } from 'react';
import { ButtonWrapper, TitleWrapper, Header, Wrapper } from './Filters.model';

import searchIcon from './icons/search.svg';

import ModalWithInput from "./Modal/Modal";
import StatusFilter from "./StatusFilter/StatusFilter";

type Props = {
  onChange: (FilterType) => void
}

const Filters = ({ onChange } : Props)  => {
  const [textSearchValue, setTextSearchValue] = useState('');
  const [isSearchTextModalOpen, setIsSearchTextModalOpen]= useState(false);
  const [statusFilter, setStatusFilter] = useState(null);

  const handleTextSearch = () => {
    setIsSearchTextModalOpen(true);
  };

  const handleOnSubmit = (value) => {
    onChange({ text: value, status: statusFilter });
    setTextSearchValue(value);
    setIsSearchTextModalOpen(false);
  };

  const handleStatusFilterChange = (statusFilterNewValue) => {
    setStatusFilter(statusFilterNewValue);
    onChange({ text: textSearchValue, status: statusFilterNewValue });
  };

  return (
    <Wrapper>
      <Header>
        <TitleWrapper>Courses</TitleWrapper>
        <ButtonWrapper onClick={handleTextSearch}><img src={searchIcon} alt='search button'/></ButtonWrapper>
      </Header>
      <div>
        <StatusFilter onChange={handleStatusFilterChange} statusFilter={statusFilter}/>
      </div>

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
