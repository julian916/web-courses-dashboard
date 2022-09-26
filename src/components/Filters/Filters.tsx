import React, { useState } from 'react';
import { ButtonWrapper, TitleWrapper, Header, Wrapper } from './Filters.model';

import searchIcon from './icons/search.svg';

import ModalWithInput from "./Modal/Modal";
import StatusFilter from "./StatusFilter/StatusFilter";
import LanguageFilter from "./LanguageFilter/LanguageFilter";

type Props = {
  onChange: (FilterType) => void
}

const Filters = ({ onChange } : Props)  => {
  const [filters, setFilters] = useState({ text: null, status: null, language: null });
  const [isSearchTextModalOpen, setIsSearchTextModalOpen]= useState(false);

  const handleTextSearch = () => {
    setIsSearchTextModalOpen(true);
  };

  const handleOnSubmit = (value) => {
    setIsSearchTextModalOpen(false);
    setFilters(prevState => {
      const newFilters = { ...prevState, text: value };
      onChange(newFilters);
      return newFilters;
    });
  };

  const handleStatusFilterChange = (newStatus) => {
    setFilters(prevState => {
      const newFilters = { ...prevState, status: newStatus };
      onChange(newFilters);
      return newFilters;
    });
  };
  
  const handleLanguageFilterChange = (newLanguage) => {
    setFilters(prevState => {
      const newFilters = { ...prevState, language: newLanguage };
      onChange(newFilters);
      return newFilters;
    });
  };

  return (
    <Wrapper>
      <Header>
        <TitleWrapper>Courses</TitleWrapper>
        <ButtonWrapper onClick={handleTextSearch}><img src={searchIcon} alt='search button'/></ButtonWrapper>
      </Header>

      <StatusFilter onChange={handleStatusFilterChange} statusFilter={filters.status}/>
      <LanguageFilter onChange={handleLanguageFilterChange} />

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
