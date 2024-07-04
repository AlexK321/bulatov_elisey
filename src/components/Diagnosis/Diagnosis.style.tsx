import styled from 'styled-components';

export const StyledDiagnosis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  align-items: center;
  background: #b29ea0;
  color: white;

  & > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &>div: nth-child(1) {
      margin-right: 30px;
    }

    & h6 {
      text-wrap: nowrap;
    }
  }

  &>div: nth-child(2) {
    justify-content: flex-end;
  }

  @media (max-width: 450px) {
    & > div {
      flex-direction: column;
    }

    & h2,
    h6 {
      text-align: center;
    }
  }
`;
