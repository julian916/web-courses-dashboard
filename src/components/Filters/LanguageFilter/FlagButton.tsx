import React from 'react';

import { LanguageEnum } from "../../../types/course";
import styled from "styled-components";

type Props = {
  lang: LanguageEnum,
  onClick: (LanguageEnum) => void
  active: boolean
}

const StyledButton = styled.button`
  color: #000;
  background: transparent;
  padding: 8px 10px;
  border: 1px solid #dad8d8;
  border-radius: 10px;
  
  ${(props) => props.active ? `
    border: 1px solid black;
    text-shadow: 0.5px 0.5px;
  ` : ''}
`;

const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const StyledSpan = styled.span`
  margin: 0px 10px;
  font-size: 15px;
`;

const FlagButton = ({ lang, onClick, active } : Props) => {

  return (
    <StyledButton onClick={() => onClick(lang)} active={active}>
      <StyledIcon src={`flags/flag-${LanguageEnum[lang]}.svg`} alt={lang}/>
      <StyledSpan>
        {lang}
      </StyledSpan>
    </StyledButton>
  );
};

export default FlagButton;
