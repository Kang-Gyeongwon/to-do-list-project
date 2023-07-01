import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
  @font-face {
    font-family: 'Humanbumsuk';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Humanbumsuk.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  font-family: 'Humanbumsuk';
  background-color: #000000;
  color: #E8E8E8;
  }
`;
