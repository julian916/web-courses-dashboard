import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const PreviewIcon = styled.div<{ itemNumber: number }>`
  height: 100%;
  width: 30%;
  font-size: 40px;
  display: flex;
  align-items: center;
  color: #dddddd;
  background: ${(props) => props.itemNumber%2 ? '#f89440' : '#dd5d3e'};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-content: center;
  font-weight: bold;
`;

export const LectureDetail = styled.div`
  width: 52%;
  margin: 20px;
  
  p {
    font-size: 12px;
    opacity: 0.7;
    margin: 0;
  }
`;

export const StyledPlayButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  border-radius: 50%;
  font-size: 23px;
`;
