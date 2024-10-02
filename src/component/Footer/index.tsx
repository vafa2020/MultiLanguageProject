import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <footer
      dir={theme.direction === "rtl" ? "rtl" : "ltr"}
      style={{
        backgroundColor: "#222",
        height: "5rem",
        padding: "1rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
        <Typography sx={{ color: "white" }}>{t("Crafted by Mohammad Hossein Vafaee")}</Typography>
        <Typography sx={{ color: "white" }}>{t("© 2024 - React Shopping")}</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
