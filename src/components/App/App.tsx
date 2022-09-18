import React from 'react';
import styled from 'styled-components';
import Filters from "../Filters/Filters";
import Courses from "../Courses/Courses";
import CurrentView from "../CurrentView/CurrentView";

const TitleWrapper = styled.h2``;

function App() {
  return (
    <>
      <TitleWrapper>Courses</TitleWrapper>
      <Filters />
      <Courses />
      <CurrentView />
    </>
  );
}

export default App;
