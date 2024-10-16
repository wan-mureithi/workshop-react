import { createTheme } from "@mui/material/styles"
import reactTheme from "./componenetsTheme"

const drawerWidth = "20rem"

// FIXME: Make sure it's typescript
// TODO: Align with baseline

// defining mui custom theme
export const muiTheme = createTheme({
  palette: {
    ...reactTheme.colors,
  },
  typography: {
    fontFamily: "Poppins",
    lineHeight: "1.75rem",
    fontWeight: 400,
    color: reactTheme.colors,
    headBold: {
      display: "block",
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 2.5,
      fontFamily: "Poppins",
    },
    subheadBold: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 2,
      display: "block",
      fontFamily: "Poppins",
    },
    captionItalicWhite: {
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "0.75rem",
      color: reactTheme.colors?.neutral?.main,
      fontFamily: "Poppins",
    },
    captionItalicBlack: {
      fontStyle: "italic",
      fontWeight: 300,
      fontSize: "0.75rem",
      color: reactTheme.colors?.primary?.light,
      padding: "0.1rem 0.5rem",
      textAlign: "justify",
      fontFamily: "Poppins",
    },
    captionBookBlack: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "0.75rem",
      color: reactTheme.colors?.primary?.light,
      padding: "0.1rem 0.5rem",
      textAlign: "justify",
      fontFamily: "Poppins",
    },
    titleItalicBlack: {
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: "1rem",
      color: reactTheme.colors?.primary?.main,
      textAlign: "center",
      fontFamily: "Poppins",
    },
    titleBoldBlack: {
      fontWeight: 500,
      fontSize: "1rem",
      color: reactTheme.colors?.primary?.main,
      display: "block",
      fontFamily: "Poppins",
    },
    bannerText: {
      color: "white",
      fontWeight: 400,
      lineHeight: "1.75rem",
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          minHeight: "3.75rem",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: drawerWidth,
          flexShrink: 0,
        },
        paper: {
          top: "5rem",
          backgroundColor: "#f58220",
          color: "white",
          width: drawerWidth,
          boxSizing: "border-box",
          paddingLeft: "4rem",
          paddingRight: "4rem",

          "& .MuiListItemText-root": {
            color: "inherit",
          },
          "& .MuiListItemText-secondary": {
            color: "inherit",
          },
          "& .MuiListItemText-secondary.Mui-selected": {
            color: "inherit",
            fontWeight: 600,
          },
          "& .MuiListItemButton-root.Mui-selected": {
            fontWeight: 600,
            background: "transparent",
            "&:hover": {
              background: "transparent",
            },
          },
          "& .MuiListItemButton-root": {
            "&:hover": {},
            disableRipple: true,
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            textTransform: "none",
            "&:hover": {
              background: "none",
            },
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "1.5rem",
          },
        },
        {
          props: { variant: "primary" },
          style: {
            minWidth: "8rem",
            height: "2.5rem",
            padding: "0.5rem",
            borderRadius: "0.625rem",
            background: reactTheme.colors?.secondary?.main,
            "&:hover": {
              background: reactTheme.colors?.secondary?.main,
              opacity: 0.875,
            },
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
            color: reactTheme.colors?.neutral?.main,
            textAlign: "center",
          },
        },
        {
          props: { variant: "refresh" },
          component: "label",
          tabIndex: -1,
          style: {
            width: "10rem",
            height: "2.5rem",
            padding: "0.5rem",
            borderRadius: "0.625rem",
            background: reactTheme.colors?.banner?.main,
            "&:hover": {
              background: reactTheme.colors?.neutral?.light,
              opacity: 0.875,
              color: reactTheme.colors?.banner?.main,
            },
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
            color: reactTheme.colors?.neutral?.main,
            textAlign: "center",
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: reactTheme.colors?.neutral?.light,
          height: "7rem",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          textTransform: "capitalize",
        },
        avatar: {
          margin: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "transparent",
          borderRadius: "0 !important",
          "&.Mui-expanded": {
            margin: "0",
          },
          width: "100%",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: { root: { minHeight: "4rem" } },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: reactTheme.colors?.neutral?.light,
          color: reactTheme.colors?.primary?.main,
          textAlign: "justify",
          maxWidth: "50vw",
          fontSize: "0.85rem",
          borderRadius: "0.5rem",
          padding: "0.5rem",
          maxHeight: "90vh",
          overflowY: "auto",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0.25rem",
        },
      },
    },
    MenuProps: {
      PaperProps: {
        style: {
          maxHeight: "14rem",
          width: "25rem",
          wordBreak: "break-word",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: { color: reactTheme.colors?.banner?.main },
        thumb: {
          height: "1rem",
          width: "1rem",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&[disabled]": {
            color: "lightgrey",
            textDecorationColor: "lightgrey",
          },
        },
      },
    },
  },
})
