import React from 'react';
import { CourseType } from '../../types/course';
import CourseItem from '../CourseItem/CourseItem';
import styled from 'styled-components';

type Props = {
  courses: Array<CourseType>,
  selectCourse: (CourseType) => void
}

const CourseListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseList = ({ courses, selectCourse } : Props) => (
  <CourseListWrapper>
    {courses.map((course) => {
      return (
        <CourseItem key={course.id} course={course} onClick={selectCourse}/>
      );
    })}
  </CourseListWrapper>
);

export default React.memo(CourseList);
