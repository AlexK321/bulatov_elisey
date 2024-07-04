import { useState } from 'react';
import { Button, Modal } from 'antd';

import copyIcon from '../../assets/copy_icon.png';
import document1 from '../../assets/document1.png';
import document2 from '../../assets/document2.png';
import document3 from '../../assets/document3.png';
import { Line } from '../../core/Line';
import { Typography } from '../../core/Typography';

import { ImageContainer, ImagesContainer, StyledDocuments, StyledModal } from './Documents.style';

export const Documents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDocument, setCurrentDocument] = useState(1);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledDocuments>
      <div>
        <Line isLight width="90%" />
        <Typography variant="h1">Подтверждающие документы</Typography>

        <ImagesContainer>
          <ImageContainer
            onClick={() => {
              setCurrentDocument(1);
              showModal();
            }}
          >
            <img src={document1} />
          </ImageContainer>
          <ImageContainer
            onClick={() => {
              setCurrentDocument(2);
              showModal();
            }}
          >
            <img src={document2} />
          </ImageContainer>
          <ImageContainer
            onClick={() => {
              setCurrentDocument(3);
              showModal();
            }}
          >
            <img src={document3} />
          </ImageContainer>
        </ImagesContainer>
        <StyledModal title=" " open={isModalOpen} onCancel={handleCancel} footer={null}>
          <div>
            {currentDocument === 1 && <img src={document1} style={{ minWidth: '60vw' }} />}
            {currentDocument === 2 && <img src={document2} style={{ minWidth: '60vw' }} />}
            {currentDocument === 3 && <img src={document3} style={{ minWidth: '60vw' }} />}
          </div>
        </StyledModal>
      </div>
    </StyledDocuments>
  );
};
