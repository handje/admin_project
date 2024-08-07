import { css } from "styled-components";

const colors = {
  darkBlue100: "#b3d3e2",
  darkBlue200: "#c1dfed",
  darkBlue300: "#6198b0",
  darkBlue400: "#45758c",
  darkBlue500: "#2c698d",
  darkBlue600: "#1f4b61",
  darkBlue700: "#163747",
  darkBlue800: "#102933",
  darkBlue900: "#0b1f29",

  border100: "#6198b0",
  border300: "#45758c",
  hover: "#b3d3e2",

  header: {
    bgColor: "#45758c",
    textColor: "#fff",
  },
  nav: {
    bgColor: "#bae8e8",
    textColor: "#2c698d",
    active: "#2c698d",
    hover: "#a5d8da",
    actionText: "#fff",
  },
  content: {
    bgColor: "#fff",
    headerBg: "#45758c",
    headerTxt: "#fff",
  },
  table: {
    head: "#e3f6f5",
    hover: "#f5f5f5", //fff
    textColor: "#2c698d",
  },
  card: {
    bgColor: "#f5f5f5", //fff
    title: "#2c698d",
    textColor: "#666666", //333
  },
  button: {
    bgColor: "#2c698d",
    textColor: "#fff",
    hover: "#a5d8da",
  },
  warning: "#f00",
};

const mediaSize = {
  sm: "screen and (max-width: 576px)", //모바일
  md: "screen and (max-width: 600px)", //태블릿
  lg: "screen and (max-width: 960px)", //노트북
  xl: "screen and (max-width: 1024px)", //데스크탑
  xxl: "screen and (max-width: 1280px)", //데스크탑,tv
};

const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xxl: "1.5rem",
};

const size = {
  xs: "0.2em",
  sm: "0.4em",
  md: "0.6em",
  lg: "1em",
  xl: "1.4em",
  xxl: "1.6em",
};

/** 유틸리티 */
const util = {
  scroll: (color: string) => css`
    &::-webkit-scrollbar {
      /** 스크롤바의 너비 */
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      /** 스크롤바 길이 */
      height: 25%;
      /** 스크롤바의 색상 */
      background: ${color};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      /** 스크롤바 뒷 배경 색상 */
      background: white;
      border: 1px solid ${color};
    }
  `,
};

const theme = {
  colors,
  mediaSize,
  fontSize,
  size,
  util,
};

export default theme;

export type Theme = typeof theme;
