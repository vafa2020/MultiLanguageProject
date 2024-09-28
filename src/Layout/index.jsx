import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Box, useTheme } from "@mui/material";

const Layout = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", p: 0, m: 0, height: "100vh" }}>
      <Header />
      <main dir={theme.direction === "rtl" ? "rtl" : "ltr"}>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};

export default Layout;
