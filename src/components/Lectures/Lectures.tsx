import React from 'react';
import { LectureType } from "../../types/course";

import { LectureDetail, PreviewIcon, StyledPlayButton, Wrapper } from './Lectures.model';

type Props = {
  lectures: Array<LectureType>
}

const sanitizeTime = (seconds) => `${Math.floor(seconds / 60)}:${seconds % 60}mins`;

const Lectures = ({ lectures } : Props) => {
  return (
    <div>
      {lectures.map(({ name, durationInSeconds, description }, index) => (
        <Wrapper key={index}>
          <PreviewIcon itemNumber={index}>•••</PreviewIcon>
          <LectureDetail>
            <p>
                🕒 {sanitizeTime(durationInSeconds)}
            </p>
            <h6>{name}</h6>
            <p>
              {description}
            </p>
          </LectureDetail>
          <StyledPlayButton>
            ▶
          </StyledPlayButton>
        </Wrapper>
      ))}
    </div>
  );
};

export default Lectures;
