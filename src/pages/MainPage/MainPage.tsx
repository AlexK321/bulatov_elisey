import { Diagnosis } from '../../components/Diagnosis';
import { Documents } from '../../components/Documents';
import { Header } from '../../components/Header';
import { HelpSection } from '../../components/HelpSection';
import { Instagram } from '../../components/Instagram';

import { MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  return (
    <MainWrapper>
      <MainContent>
        <Header />
        <Diagnosis />
        <HelpSection />
        <Documents />
        <Instagram />
      </MainContent>
    </MainWrapper>
  );
};
