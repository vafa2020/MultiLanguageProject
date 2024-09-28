import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FlagMenu from "../FlagMenu";

const Navbar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: theme.direction === "rtl" ? "flex-start" : "flex-end",
          gap: 5,
          listStyle: "none",
        }}
      >
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
        <li>
          <FlagMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
