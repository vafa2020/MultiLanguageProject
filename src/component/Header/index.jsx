import Navbar from "../Navbar";
import { useTheme } from "@mui/material";
const Header = () => {
  const theme = useTheme();

  return (
    <header
      dir={theme.direction === "rtl" ? "rtl" : "ltr"}
      style={{ backgroundColor: "#222", height: "4rem", position: "fixed", left: 0, right: 0, top: 0, zIndex: 2 }}
    >
      <Navbar />
    </header>
  );
};

export default Header;
