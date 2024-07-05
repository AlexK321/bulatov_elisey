import qr from '../../assets/qr.png';
import { Line } from '../../core/Line';
import { Typography } from '../../core/Typography';

import { ImageContainer, StyledInstagram } from './Instagram.style';

export const Instagram = () => {
  return (
    <StyledInstagram>
      <Line />
      <Typography variant="h1">Инстаграм</Typography>
      <div>
        <Typography variant="text" style={{ margin: '0 auto' }}>
          Нажми на qr или отсканируй
        </Typography>
      </div>

      <div>
        <a href="https://www.instagram.com/elisey29.06?igsh=MThpbWtjczNpMW5hbg%3D%3D&utm_source=qr">
          <ImageContainer>
            <img src={qr} />
          </ImageContainer>
        </a>
      </div>
    </StyledInstagram>
  );
};
