import React from 'react';
import { CourseType } from "../../types/course";
import CourseItem from "../CourseItem/CourseItem";
import styled from "styled-components";

type Props = {
  data: Array<CourseType>
}

const CourseListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CourseList = ({ data } : Props) => (
  <CourseListWrapper>
    {data.map((course) => {
      return (
        <CourseItem key={course.id} data={course} />
      );
    })}
  </CourseListWrapper>
);

export default CourseList;
