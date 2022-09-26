import React, { useState } from 'react';
import FlagButton from "./FlagButton";
import { LanguageEnum } from "../../../types/course";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 15px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  height: 45px;
`;

type Props = {
  onChange: (LanguageEnum) => void
}

const LanguageFilter = ({ onChange } : Props) => {
  const [languageSelected, setLanguageSelected] = useState(null);

  const handleSelect = (languageSelected) => {
    setLanguageSelected(prevState => {
      // if same value is selected the filter is cleared with null
      const newValue = prevState === languageSelected ? null : languageSelected;

      // Send key value
      onChange(LanguageEnum[newValue]);

      return newValue;
    });
  };

  return (
    <Wrapper>
      <FlagButton  lang={LanguageEnum.EN} onClick={handleSelect} active={languageSelected === LanguageEnum.EN}/>
      <FlagButton  lang={LanguageEnum.ES} onClick={handleSelect} active={languageSelected === LanguageEnum.ES}/>
      <FlagButton  lang={LanguageEnum.FR} onClick={handleSelect} active={languageSelected === LanguageEnum.FR}/>
      <FlagButton  lang={LanguageEnum.CH} onClick={handleSelect} active={languageSelected === LanguageEnum.CH}/>
    </Wrapper>
  );
};

export default LanguageFilter;
