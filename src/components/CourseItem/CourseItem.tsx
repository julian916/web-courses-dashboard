import React from 'react';

import { CourseType } from "../../types/course";

import { trimString } from "../../api/utils/utils";
import {
  Content,
  CourseItemWrapper,
  DetailsWrapper,
  Description,
  StyledImage,
  Title,
  LevelWrapper
} from './CourseItem.model';
import Rate from "../Rate/Rate";
import Level from "../Level/Level";

type Props = {
  data: CourseType
}

const CourseItem = ({ data } : Props) => {
  const { name, courseImageUrl, description, rate, level } = data;
  return (
    <CourseItemWrapper>
      <StyledImage src={courseImageUrl} alt='courseImage'/>
      <Content>
        <Title>{name}</Title>
        <Description>
          {trimString(description, 90)}
        </Description>
        <DetailsWrapper>
          <div>
            <Rate {...rate} />
          </div>
          <LevelWrapper>
            {level}
          </LevelWrapper>
        </DetailsWrapper>
      </Content>
    </CourseItemWrapper>
  );
};

export default CourseItem;
