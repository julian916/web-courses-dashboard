import React, { useState } from 'react';
import { StatusEnum } from "../../../types/course";
import styled from "styled-components";

const StyledButton = styled.span`
  cursor: pointer;
  color: ${(props) => props.active ? '#000' : '#b9b8b8'};
  margin-right: 25px;
  font-size: 20px;
`;

type Props = {
  onChange: (StatusEnum) => void,
  statusFilter: StatusEnum | null
}

const StatusFilter = ({ onChange, statusFilter } : Props) => {
  const handleStatusChange = (newValue) => {
    onChange(newValue);
  };

  return (
    <>
      <StyledButton
        onClick={() => handleStatusChange(null)}
        active={statusFilter === null}
      >
        All
      </StyledButton>
      <StyledButton
        onClick={() => handleStatusChange(StatusEnum.ACTIVE)}
        active={statusFilter === StatusEnum.ACTIVE}
      >
        Active
      </StyledButton>
      <StyledButton
        onClick={() => handleStatusChange(StatusEnum.COMPLETED)}
        active={statusFilter === StatusEnum.COMPLETED}
      >
        Completed
      </StyledButton>
    </>
  );
};

export default StatusFilter;
