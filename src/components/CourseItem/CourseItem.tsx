import React from 'react';

import { CourseType } from '../../types/course';

import { trimString } from '../../api/utils/utils';
import {
  Content,
  CourseItemWrapper,
  Description,
  DetailsWrapper,
  LevelWrapper,
  StyledImage,
  Title
} from './CourseItem.model';
import Rate from '../Rate/Rate';
import Level from '../Level/Level';

type Props = {
  data: CourseType,
  onClick: (CourseType) => void
}


const CourseItem = ({ data, onClick } : Props) => {
  const { name, courseImageUrl, description, rate, level } = data;
  return (
    <CourseItemWrapper onClick={() => onClick(data)}>
      <StyledImage src={courseImageUrl} alt='courseImage'/>
      <Content>
        <Title>{name}</Title>
        <Description>
          {trimString(description, 110)}
        </Description>
        <DetailsWrapper>
          <div>
            <Rate {...rate} />
          </div>
          <LevelWrapper>
            <Level level={level} />
          </LevelWrapper>
        </DetailsWrapper>
      </Content>
    </CourseItemWrapper>
  );
};

export default CourseItem;
