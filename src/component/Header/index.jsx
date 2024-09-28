import Navbar from "../Navbar";
import { useTheme } from "@mui/material";
const Header = () => {
  const theme = useTheme();

  return (
    <header dir={theme.direction === "rtl" ? "rtl" : "ltr"} style={{ backgroundColor: "#c6c6c6", height: "5rem" }}>
      <Navbar />
    </header>
  );
};

export default Header;
