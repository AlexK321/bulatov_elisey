import { Line } from '../../core/Line';
import { Typography } from '../../core/Typography';

import { StyledDiagnosis } from './Diagnosis.style';

export const Diagnosis = () => {
  return (
    <StyledDiagnosis>
      <Line isLight />
      <div>
        <div>
          <Typography variant="h1">Диагноз</Typography>
        </div>
        <div>
          <Typography variant="h2">Двусторонняя хроническая нейросенсорная тугоухость, глухота по ВОЗ</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography variant="h2">Сбор средств на операцию по кохлеарной имлантации </Typography>
        </div>
        <div>
          <Typography variant="h6">32 000 € </Typography>
        </div>
      </div>
      <Line isLight width="60%" />
    </StyledDiagnosis>
  );
};
