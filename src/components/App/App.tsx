import React, { useEffect, useState } from 'react';
import Filters from "../Filters/Filters";
import CourseList from "../CourseList/CourseList";
import CurrentView from "../CurrentView/CurrentView";
import { getCourses } from "../../api/getCourses";
import { CourseType } from "../../types/course";
import { LeftContainer, RightWrapper, Wrapper } from './App.model';

const App = () => {
  const [courses, setCourses] = useState<Array<CourseType>>([]);

  useEffect(() => {
    const defaultFilters = { text: null, status: null, language: null };
    getCourses(defaultFilters).then((data) => setCourses(data));
  }, []);

  const handleFilterChange = (newFilters) => {
    getCourses(newFilters).then((data) => setCourses(data));
  };

  return (
    <Wrapper>
      <LeftContainer>
        <Filters onChange={handleFilterChange}/>
        <CourseList data={courses}/>
      </LeftContainer>
      <RightWrapper>
        <CurrentView/>
      </RightWrapper>
    </Wrapper>
  );
};

export default App;
