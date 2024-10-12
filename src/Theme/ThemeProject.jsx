import { I18nextProvider, useTranslation } from "react-i18next";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const ThemeProject = (props) => {
  const { i18n } = useTranslation();
  const theme = createTheme({
    direction: i18n.language === "fa" ? "rtl" : "ltr",
    typography: {
      fontFamily: `"IRANYekanWeb", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    palette: {
      mode: "dark",
    },
  });
  const cache = createCache({
    key: "muiltr",
    stylisPlugins: [],
  });
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CacheProvider value={i18n.language === "fa" ? cacheRtl : cache}>
        <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
      </CacheProvider>
    </ThemeProvider>
  );
};

export default ThemeProject;
