import React from 'react';
import { LectureType } from "../../types/course";
import styled from "styled-components";

type Props = {
  data: LectureType
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

const PreviewIcon = styled.div`
  
`;

const LectureDetail = styled.div`
  
`;

const sanitizeTime = (seconds) => `${Math.floor(seconds / 60)} : ${seconds % 60} mins`;

const Lecture = ({ data: { name, durationInSeconds, description } } : Props) => {
  return (
    <Wrapper>
      <PreviewIcon>•••</PreviewIcon>
      <div>
        <LectureDetail>
          <p>
            🕒 {sanitizeTime(durationInSeconds)}
          </p>
          <h6>{name}</h6>
          <p>
            {description}
          </p>
        </LectureDetail>
      </div>
      <div>
        ▷
      </div>
    </Wrapper>
  );
};

export default Lecture;
