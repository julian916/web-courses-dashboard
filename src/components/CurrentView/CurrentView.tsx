import React from 'react';
import { CourseType } from '../../types/course';
import Rate from '../Rate/Rate';
import Level from '../Level/Level';
import TeacherDetail from './TeacherDetails/TeacherDetail';
import { Container, CourseContent, StyledText, InlineWrapper, StyledImage, TitleWrapper, Wrapper } from './CurrentView.model';
import Lectures from '../Lectures/Lectures';

type Props = {
  selectedCourse?: CourseType
}

const CurrentView = ({ selectedCourse } : Props) => {
  if(!selectedCourse) {
    return null;
  }

  const { introMediaUrl, rate, level, name, fullDescription, teacher, content } = selectedCourse;
  return (
    <Wrapper>
      <StyledImage>
        <img src={introMediaUrl} alt='Intro Media' />
      </StyledImage>
      <Container>
        <InlineWrapper>
          <div style={{ paddingRight: '20px' }}>
            <Rate stars={rate.stars} amount={rate.amount} />
          </div>
          <Level level={level} />
        </InlineWrapper>
        <TitleWrapper>
          {name}
        </TitleWrapper>
        <StyledText>
          {fullDescription}
        </StyledText>
        <TeacherDetail teacher={teacher}/>
        <CourseContent>
          <InlineWrapper>
            <h5><strong>Course`s Content</strong></h5>
            <StyledText>{content.lecturesAmount} lectures • {content.lecturesHours} hours</StyledText>
          </InlineWrapper>
          <Lectures lectures={content.lectures} />
        </CourseContent>
      </Container>
    </Wrapper>
  );
};

export default React.memo(CurrentView);
