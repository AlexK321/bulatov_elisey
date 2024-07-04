import styled from 'styled-components';

export const StyledHelpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 30px;
  align-items: start;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  & img:hover {
    transform: scale(1.2);
  }
`;
