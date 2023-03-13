import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
    },
    space: {},
    fonts: {},
  },
});

export default theme;

export const lightTheme = createTheme({
  type: "light",
  className: "nextui-docs-light",
  theme: {
    colors: {
      headerBackground: "hsla(0,0%,100%,0.8)",
      menuBackground: "rgba(255, 255, 255, 0.8)",
      headerIconColor: "$accents4",
      codeBackground: "#363449",
      codeComment: "$accents7",
      codeCopyIconColor: "$accents2",
      cardBackground: "$white",
      codeHighlight: "hsl(243, 16%, 30%)",
      backgroundBlur: "rgba(255, 255, 255, 0.3)",
      blockLinkColor: "#FF1CF7",
      blockLinkBackground: "$accents1",
      blockLinkHoverBackground: "#FFD1ED",
    },
  },
});

export const darkTheme = createTheme({
  type: "dark",
  className: "nextui-docs-dark",
  theme: {
    colors: {
      menuBackground: "rgba(0,0,0,0.5)",
      headerBackground: "rgba(0,0,0,0.5)",
      headerIconColor: "$accents8",
      codeBackground: "#111111",
      codeComment: "$accents6",
      codeCopyIconColor: "$accents7",
      codeHighlight: "hsl(0, 0%, 15%)",
      cardBackground: "$accents0",
      backgroundBlur: "rgba(255, 255, 255, 0.1)",
      blockLinkColor: "#FFA4E3",
      blockLinkBackground: "$accents1",
      blockLinkHoverBackground: "#55057A",
    },
  },
});
