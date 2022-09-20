import React from 'react';
import styled from "styled-components";

const StarsWrapper = styled.div`
  display: inline-flex;
  color: #bcbbbb;

  .starred {
    color: #d8b002;
  }
`;

const Stars = ({ stars } : { stars: number }) => {
  const starArray = new Array(5).fill(<span>★</span>);

  return <StarsWrapper>
    {starArray.map((star, index) => (
      <div key={index} className={index < stars ? 'starred' : ''}>{star}</div>
    ))}
  </StarsWrapper>;
};

export default Stars;
