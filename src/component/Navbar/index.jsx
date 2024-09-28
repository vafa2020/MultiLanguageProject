import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FlagMenu from "../FlagMenu";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <ul
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          listStyle: "none",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return {
                  color: isActive ? "red" : "#ccc",
                };
              }}
            >
              {t("Home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return {
                  color: isActive ? "red" : "#ccc",
                };
              }}
            >
              {t("Product")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profiles"
              className={({ isActive }) => {
                return {
                  color: isActive ? "red" : "#ccc",
                };
              }}
            >
              {t("Profile")}
            </NavLink>
          </li>
        </Box>
        <Box>
          <li>
            <FlagMenu />
          </li>
        </Box>
      </ul>
    </nav>
  );
};

export default Navbar;
