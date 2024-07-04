import { Modal } from 'antd';
import styled from 'styled-components';

export const StyledDocuments = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  background: #b29ea0;
  color: white;

  & img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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

export const StyledModal = styled(Modal)`
  & img {
    max-width: 100%;
    margin: 0 auto;
  }
  @media (min-width: 800px) {
    & .ant-modal {
      width: 100vw !important;
    }

    & .ant-modal-content {
      width: fit-content;
      max-width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  }
`;
