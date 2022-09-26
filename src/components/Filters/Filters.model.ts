import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px 30px 15px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.h2`
  font-weight: bold;
`;

export const ButtonWrapper = styled.button`
  background: white;
  border: none;
  box-shadow: 1px 1px #d4d4d4;
  border-radius: 30%;
  padding: 1px 4px;

  :active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
  
  img {
    opacity: 0.5;
    vertical-align: middle;
  }
`;
