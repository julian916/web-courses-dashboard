import React from 'react';
import { RateType } from "../../types/course";
import styled from "styled-components";
import Stars from "./Stars/Stars";

const StarsNumber = styled.span`
  font-weight: bold;
  font-size: 15px;
  margin: 0px 4px;
`;

const AmountNumber = styled.span`
  font-size: 12px;
  color: #808080;
`;

const Rate = ({ stars, amount } : RateType) => {
  return (
    <>
      <Stars stars={stars}/>
      <StarsNumber>{stars}</StarsNumber>
      <AmountNumber>({amount})</AmountNumber>
    </>
  );
};

export default Rate;
