import image from '../../assets/photo.png';
import { Typography } from '../../core/Typography';

import { ImageContainer, StyledHeader, TitleDescription } from './Header.style';

export const Header = () => {
  return (
    <StyledHeader>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <div>
        <Typography variant="h6">БУЛАТОВ ЕЛИСЕЙ</Typography>
        <TitleDescription>
          <Typography variant="h2">
            Родился 29 июня 2023г.,
            <br />
            Беларусь, г. Минск
          </Typography>
        </TitleDescription>
      </div>
    </StyledHeader>
  );
};
