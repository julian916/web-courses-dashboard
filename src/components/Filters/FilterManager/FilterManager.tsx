import React, { useState } from 'react';
import { FilterType } from '../../../types/filter';
import filterIcon from '../icons/filter.png';
import { ButtonWrapper } from "../Filters.model";
import ModalWithFilters from "../../Modals/ModalWithFilters/ModalWithFilters";

type Props = {
  filters: FilterType,
  onChange: (FilterType) => void
}

const FilterManager = ({ filters, onChange } : Props) => {
  const [ isManagerModalOpen, setIsManagerModalOpen] = useState(false);

  const openFiltersModal = () => {
    setIsManagerModalOpen(true);
  };

  const handleFiltersChange = (filters) => {
    setIsManagerModalOpen(false);
    onChange(filters);
  };
  
  return (
    <>
      <ButtonWrapper onClick={openFiltersModal}>
        <img src={filterIcon} alt='Filter Icon' height='30px' width='30px' />
      </ButtonWrapper>

      {isManagerModalOpen && (
        <ModalWithFilters
          isOpen={isManagerModalOpen}
          onClose={() => setIsManagerModalOpen(false)}
          onSubmit={handleFiltersChange}
          filters={filters}
        />
      )}
    </>
  );
};

export default FilterManager;
