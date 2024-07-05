import styled from 'styled-components';

export const StyledInstagram = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 30px;
  align-items: start;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  & a {
    color: red;
    font-family: helvetica;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const ImageContainer = styled.div`
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  height: 300px;
  border: 5px solid white;
  margin: 16px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 450px) {
    width: 250px;
    height: 250px;
    margin: 16px 0;
  }
`;
