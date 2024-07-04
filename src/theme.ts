import { createGlobalStyle } from 'styled-components';

export interface ITheme {
  colors: {
    bg: string;
    bg2: string;
    font: string;
    main: string;
  };
}

const darkTheme: ITheme = {
  colors: {
    bg: '#8298ab',
    bg2: '#001529',
    font: '#E5E4E8',
    main: 'orange',
  },
};

const lightTheme: ITheme = {
  colors: {
    bg: 'white',
    bg2: 'white',
    font: 'black',
    main: 'blue',
  },
};

export const appTheme: { dark: ITheme; light: ITheme } = {
  dark: darkTheme,
  light: lightTheme,
};

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Sofia Sans Condensed", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 40px;
  };
  h2 {
    font-size: 30px;
  };
  h3 {
    font-size: 24px;
    margin: 5px 0;
  };
  h6 {
    font-size: 64px;
    margin: 20px 0;
  };

  p {
    font-size: 22px;
    margin: 8px 0;
  };


  .ant-modal {
    width: 100vw !important;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 28px;
    };
    h2 {
      font-size: 24px;
    };
    h3 {
      font-size: 20px;
    };
    h6 {
    font-size: 44px;
    margin: 16px 0;
    };
  }
`;
