import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <footer
      dir={theme.direction === "rtl" ? "rtl" : "ltr"}
      style={{ backgroundColor: "#c6c6c6", position: "absolute", bottom: 0, left: 0, right: 0, height: "5rem" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography>{t("Designed by Mohammad Hossein Vafaee")}</Typography>
        <Typography>{t("Wellcome")}</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
