import React from 'react';
import { CourseType } from '../../types/course';
import Rate from '../Rate/Rate';
import Level from '../Level/Level';
import TeacherDetail from './TeacherDetails/TeacherDetail';
import { Content, DescriptionWrapper, InlineWrapper, StyledImage, TitleWrapper, Wrapper } from './CurrentView.model';

type Props = {
  data?: CourseType
}

const CurrentView = ({ data } : Props) => {
  if(!data) {
    return null;
  }

  const { introMediaUrl, rate, level, name, fullDescription, teacher } = data;
  return (
    <Wrapper>
      <StyledImage>
        <img src={introMediaUrl} alt='Intro Media' />
      </StyledImage>
      <Content>
        <InlineWrapper>
          <div style={{ paddingRight: '20px' }}>
            <Rate stars={rate.stars} amount={rate.amount} />
          </div>
          <Level level={level} />
        </InlineWrapper>
        <TitleWrapper>
          {name}
        </TitleWrapper>
        <DescriptionWrapper>
          {fullDescription}
        </DescriptionWrapper>
        <TeacherDetail data={teacher}/>
      </Content>
    </Wrapper>
  );
};

export default CurrentView;
