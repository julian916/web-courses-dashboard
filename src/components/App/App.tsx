import React, { useEffect, useState } from 'react';
import Filters from "../Filters/Filters";
import CourseList from "../CourseList/CourseList";
import CurrentView from "../CurrentView/CurrentView";
import { getCourses } from "../../api/getCourses";
import { CourseType } from "../../types/course";
import { FilterType } from "../../types/filter";
import { LeftContainer, RightWrapper, TitleWrapper, Wrapper } from './App.model';

const App = () => {
  const [filters, setFilters] = useState<FilterType>({ text: undefined, status: undefined, language: undefined });
  const [courses, setCourses] = useState<Array<CourseType>>([]);
  
  useEffect(() => {
    getCourses(filters).then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <Wrapper>
      <LeftContainer>
        <TitleWrapper>Courses</TitleWrapper>
        <Filters/>
        <CourseList data={courses}/>
      </LeftContainer>
      <RightWrapper>
        <CurrentView/>
      </RightWrapper>
    </Wrapper>
  );
};

export default App;
