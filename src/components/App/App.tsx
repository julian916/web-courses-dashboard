import React, { useEffect, useState } from 'react';
import Filters from "../Filters/Filters";
import CourseList from "../CourseList/CourseList";
import CurrentView from "../CurrentView/CurrentView";
import { getCourses } from "../../api/getCourses";
import { CourseType } from "../../types/course";
import { FilterType } from "../../types/filter";
import { LeftContainer, RightWrapper, Wrapper } from './App.model';

const App = () => {
  const [filters, setFilters] = useState<FilterType>({ text: undefined, status: undefined, language: undefined });
  const [courses, setCourses] = useState<Array<CourseType>>([]);

  const getCoursesFilteredBy = (filters: FilterType) => {
    getCourses(filters).then((data) => {
      setCourses(data);
    });
  };

  useEffect(() => {
    getCoursesFilteredBy(filters);
  }, []);

  const handleFilterChange = (newFilters) => {
    getCoursesFilteredBy(newFilters);
    setFilters(newFilters);
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
