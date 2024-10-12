import { useTranslation } from "react-i18next";
import { useDarkMode } from "../Context";
import { useTheme } from "@mui/material";

const Home = () => {
  const darkoMode = useDarkMode();
  const theme = useTheme();
  console.log("darkoMode", darkoMode);
  console.log("theme", theme.palette.mode);
  const { t } = useTranslation();
  return <div>{t("Home")}</div>;
};

export default Home;
