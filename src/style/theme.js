export const amTheme = {
  // ************* Header ************* //
  header: {
    height: "5.5rem",
  },

  // ************* Fonts ************* //
  typography: {
    family: "Montserrat-Arm, sans-serif",
    title: {
      default: {
        size: "2rem",
        lineHeight: "3rem",
      },
      big: {
        size: "clamp(2rem, 0.7692rem + 1.9231vw, 2.5rem)",
        lineHeight: "clamp(3rem, 0.5385rem + 3.8462vw, 4rem)",
      },
      large: {
        size: "clamp(2.5rem, 0.0385rem + 3.8462vw, 3.5rem)",
        lineHeight: "clamp(3.5rem, 1.0385rem + 3.8462vw, 4.5rem)",
      },
    },
    text: {
      default: {
        size: "1rem",
        lineHeight: "1.5rem",
      },
      small: {
        size: "0.75rem",
        lineHeight: "1rem",
      },
      big: {
        size: "1.5rem",
        lineHeight: "2rem",
      },
    },
  },

  // ************* Colors ************* //
  colors: {
    white: "#FFFFFF",
    black: "#16131E",
    gray: "#9dabaf",
    green: "#01d6a3",
    darkgreen: "#033b4a",
  },

  // ************* Media ************* //
  media: {
    typography: {
      title: {
        default: {
          size: "1.25rem",
          lineHeight: "1.875rem",
        },
        big: {
          size: "1.5rem",
          lineHeight: "2rem",
        },
        large: {
          size: "2rem",
          lineHeight: "3rem",
        },
      },
    },
  },
};

export const enTheme = {
  ...amTheme,
  typography: {
    family: "Poppins, sans-serif",
    title: amTheme.typography.title,
    text: amTheme.typography.text,
  },
};
