import React from 'react';
import FlagButton from './FlagButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  height: 45px;
`;

type Props = {
  onChange: (FiltersType) => void,
  language?: string | null
}

// TODO: Move this to a config file
const DISPLAYED_LANGUAGES = ['EN', 'ES', 'FR', 'CH'];

const LanguageFilter = ({ onChange, language } : Props) => {
  const handleSelect = (languageSelected) => {
    const newValue = languageSelected === language ? null : languageSelected;
    onChange({ language: newValue });
  };
  return (
    <Wrapper>
      {DISPLAYED_LANGUAGES.map((lang) => (
        <FlagButton
          lang={lang}
          onClick={handleSelect}
          active={lang === language}
          key={lang}
          id={lang}
        />
      ))}
    </Wrapper>
  );
};

export default LanguageFilter;
