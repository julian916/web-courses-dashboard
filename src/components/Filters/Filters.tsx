import React, { useState } from 'react';
import { ButtonWrapper, Header, InlineWrapper, TitleWrapper, Wrapper } from './Filters.model';
import searchIcon from './icons/search.svg';
import StatusFilter from './StatusFilter/StatusFilter';
import LanguageFilter from './LanguageFilter/LanguageFilter';
import FilterManager from './FilterManager/FilterManager';
import ModalWithInput from '../Modals/ModalWithInput/ModalWithInput';

type Props = {
  onChange: (FilterType) => void
}

const Filters = ({ onChange } : Props)  => {
  const [filters, setFilters] = useState({ text: null, status: null, language: null });
  const [isSearchTextModalOpen, setIsSearchTextModalOpen]= useState(false);

  const openTextSearchModal = () => setIsSearchTextModalOpen(true);
  const handleModalClose = () => setIsSearchTextModalOpen(false);

  const handleSearchTextModalSubmit = (newValue) => {
    handleModalClose();
    handleFiltersChange(newValue);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(prevState => {
      const stateComposed = { ...prevState, ...newFilters };
      onChange(stateComposed);
      return stateComposed;
    });
  };


  return (
    <Wrapper>
      <Header>
        <TitleWrapper>Courses</TitleWrapper>
        <ButtonWrapper onClick={openTextSearchModal}><img src={searchIcon} alt='search button'/></ButtonWrapper>
      </Header>

      <StatusFilter onChange={handleFiltersChange} statusFilter={filters.status}/>
      <InlineWrapper>
        <LanguageFilter onChange={handleFiltersChange} language={filters.language}/>
        <FilterManager filters={filters} onChange={handleFiltersChange}/>
      </InlineWrapper>

      {isSearchTextModalOpen && (
        <ModalWithInput
          isOpen={isSearchTextModalOpen}
          onClose={handleModalClose}
          onSubmit={handleSearchTextModalSubmit}
          lastInputValue={filters.text}
        />
      )}

    </Wrapper>
  );
};

export default Filters;
