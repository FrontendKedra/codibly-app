export interface ThemeFields {
  [index: string]: string;
}

export interface Theme {
  color: ThemeFields;
  breakpoints: ThemeFields;
  shadows: ThemeFields;
}

export const theme: Theme = {
  color: {
    white: "#ffffff",
    black: "#252525",
    scorpion: "#5f5a5a",
    alabaster: "#f5f5fa",
    wildSand: "#f4f4f4",
    gray: "#e4e6f0",
    moonRaker: "#cad9f5",
    mischka: "#d3d5df",
    jumbo: "#8c8c8e",
    pattensBlue: "#d6e4ff",
    scienceBlue: "#0366d6",
  },
  breakpoints: {
    large: "776px",
    small: "480px",
  },
  shadows: {
    hoverShadow:
      "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF",
  },
};
