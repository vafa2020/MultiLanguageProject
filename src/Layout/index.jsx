import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Box, useTheme } from "@mui/material";

const Layout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <main dir={theme.direction === "rtl" ? "rtl" : "ltr"} style={{ minHeight: "100vh", marginTop: "6rem" }}>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};

export default Layout;
