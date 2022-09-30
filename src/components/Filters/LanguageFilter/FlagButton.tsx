import React from 'react';

import { LanguageEnum } from '../../../types/course';
import styled from 'styled-components';

type Props = {
  lang: string,
  onClick: (LanguageEnum) => void,
  active: boolean,
  id?: string
}

const StyledButton = styled.button<{ active: boolean }>`
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

const FlagButton = ({ lang, onClick, active } : Props) => (
  <StyledButton onClick={() => onClick(lang)} active={active}>
    <StyledIcon src={`flags/flag-${lang}.svg`} alt={LanguageEnum[lang]}/>
    <StyledSpan>
      {LanguageEnum[lang]}
    </StyledSpan>
  </StyledButton>
);

export default FlagButton;
