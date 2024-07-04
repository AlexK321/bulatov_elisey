import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #f7f4ed;
  width: 100%;
  min-height: 100vh;
  max-width: 100vw;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  border: 2px solid #c99fb4;
  border-radius: 10px;

  @media (max-width: 1220px) {
    width: 100%;
    border: 0px solid #c99fb4;
  }
`;
