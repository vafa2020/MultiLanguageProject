import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useTheme } from "@mui/material";

const Layout = () => {
  const theme = useTheme();
  return (
    <>
      <Header />
      <main dir={theme.direction === "rtl" ? "rtl" : "ltr"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
