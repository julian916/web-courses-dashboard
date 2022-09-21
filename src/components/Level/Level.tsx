import React from 'react';
import { LevelEnum } from '../../types/course';
import styled from 'styled-components';
import beginnerIcon from './icons/icon-advanced.svg';
import advancedIcon from './icons/icon-beginner.svg';
import intermediateIcon from './icons/icon-intermediate.svg';
import allIcon from './icons/icon-all.svg';

const Wrapper = styled.div`
  border: 1px solid #ececec8a;
  padding: 3px 13px;
  border-radius: 10px;
  background: #ececec8a;
  color: #909090;
  opacity: 0.7;
`;

const Icon = styled.img`
  width: 20px;
  vertical-align: middle;
  margin: 3px;
  opacity: 0.5;
`;

const Level = ({ level } : { level: LevelEnum }) => {
  const getLevelText = () => {
    switch (level) {
    case LevelEnum.ADVANCED:
      return (<><Icon id='advanced' src={advancedIcon}/>Advanced</>);
    case LevelEnum.ALL:
      return (<><Icon id='all' src={allIcon}/>All levels</>);
    case LevelEnum.BEGINNER:
      return (<><Icon id='beginner' src={beginnerIcon}/>Beginner</>);
    case LevelEnum.INTERMEDIATE:
      return (<><Icon id='intermediate' src={intermediateIcon}/>Intermediate</>);
    }
  };

  return (
    <Wrapper>
      {getLevelText()}
    </Wrapper>
  );
};

export default Level;
