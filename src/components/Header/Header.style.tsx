import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #dcd0d0;
  display: flex;
  justify-content: space-around;
  padding: 30px 60px;
  align-items: center;

  @media (max-width: 900px) {
    padding: 30px 20px;
  }

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 300px;
  border: 7px solid white;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TitleDescription = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 770px) {
    text-align: center;
    align-items: center;
  }
`;
