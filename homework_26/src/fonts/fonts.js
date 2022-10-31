import { createGlobalStyle } from 'styled-components';

import NunitoSansWoff from "../assets/fonts/NunitoSans-Regular.woff";
import NunitoSansWoff2 from "../assets/fonts/NunitoSans-Regular.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Nunito Sans';
    src: local('Nunito Sans'), local('NunitoSans'),
    url(${NunitoSansWoff2}) format('woff2'),
    url(${NunitoSansWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  };
`;