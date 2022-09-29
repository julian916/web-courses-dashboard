import React from 'react';
import { CourseType } from '../../types/course';
import CourseItem from '../CourseItem/CourseItem';
import styled from 'styled-components';

type Props = {
  data: Array<CourseType>,
  selectCourse: (CourseType) => void
}

const CourseListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseList = ({ data, selectCourse } : Props) => (
  <CourseListWrapper>
    {data.map((course) => {
      return (
        <CourseItem key={course.id} data={course} onClick={selectCourse}/>
      );
    })}
  </CourseListWrapper>
);

export default CourseList;
