import copyIcon from '../../assets/copy_icon.png';
import { Line } from '../../core/Line';
import { Typography } from '../../core/Typography';

import { Account, StyledHelpSection } from './HelpSection.style';

const ACCOUNTS = {
  byn: 'BY37 AKBB 3134 0000 0246 0007 0000',
  eur: 'BY37 AKBB 3134 0000 0246 0007 0000',
  dol: 'BY23 AKBB 3134 1000 0120 3007 0000',
  card: '9112 3801 2731 7677',
};

export const HelpSection = () => {
  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Текст успешно скопирован в буфер обмена!');
    } catch (err) {
      console.error('Ошибка:', err);
    }
  };
  return (
    <StyledHelpSection>
      <Line />
      <Typography variant="h1">Как можно помочь</Typography>

      <Typography variant="h2">Пополнение счета МТС</Typography>
      <Typography variant="text">
        Самый быстрый способ помочь - пополнить баланс МТС +375 33 394 08 77
        <br />
        или воспользоваться услугой МТС поделись балансом *363*375333940877*СУММА#ВЫЗОВ
      </Typography>
      <Typography variant="h2">Благотварительные счета</Typography>
      <Typography variant="h3">В белорусских рублях:</Typography>
      <Account>
        <Typography variant="text">{ACCOUNTS.byn}</Typography>
        <img src={copyIcon} onClick={() => copyTextToClipboard(ACCOUNTS.byn)}></img>
      </Account>
      <br />
      <Typography variant="h3">В евро:</Typography>
      <Account>
        <Typography variant="text">{ACCOUNTS.eur}</Typography>
        <img src={copyIcon} onClick={() => copyTextToClipboard(ACCOUNTS.eur)}></img>
      </Account>
      <br />
      <Typography variant="h3">В долларах США:</Typography>
      <Account>
        <Typography variant="text">{ACCOUNTS.dol}</Typography>
        <img src={copyIcon} onClick={() => copyTextToClipboard(ACCOUNTS.dol)}></img>
      </Account>
      <br />
      <Typography variant="h2">Перевод на карту из РФ:</Typography>
      <Account>
        <Typography variant="text">Номер карты: {ACCOUNTS.card}</Typography>
        <img src={copyIcon} onClick={() => copyTextToClipboard(ACCOUNTS.card)}></img>
      </Account>
      <Typography variant="text">Срок действия: 07/28</Typography>
      <Typography variant="text">Получатель: Aliaksandra Bulatava</Typography>
      <Line width="60%" style={{ marginTop: '30px' }} />
    </StyledHelpSection>
  );
};
