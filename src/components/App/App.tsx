import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filters from "../Filters/Filters";
import Courses from "../Courses/Courses";
import CurrentView from "../CurrentView/CurrentView";
import { getCourses } from "../../api/getCourses";

const TitleWrapper = styled.h2``;

const App = () => {
  const [filters, setFilters] = useState({ text: undefined, status: undefined, language: undefined });
  useEffect(() => {
    getCourses(filters).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <TitleWrapper>Courses</TitleWrapper>
      <Filters/>
      <Courses/>
      <CurrentView/>
    </>
  );
};

export default App;
