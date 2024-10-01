import { Badge, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import FlagMenu from "../FlagMenu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useStoreCart } from "../../store/store";
import { useEffect, useState } from "react";
import CartModal from "../CartModal";
const Navbar = () => {
  const { t } = useTranslation();
  const count = useStoreCart((state) => state.count);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
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
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <li>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={(event) => setAnchorEl(event.currentTarget)}
              >
                <Typography variant="caption" sx={{ fontFamily: "IRANYekanWeb" }}>
                  {t("cart")}
                </Typography>
                <Typography variant="caption">
                  <Badge
                    badgeContent={count}
                    color="error"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    showZero
                  >
                    <LocalMallIcon />
                  </Badge>
                </Typography>
              </Box>
            </li>
            <li>
              <FlagMenu />
            </li>
          </Box>
        </ul>
      </nav>
      <CartModal open={open} close={() => setAnchorEl(null)} id={id} anchorEl={anchorEl} />
    </>
  );
};

export default Navbar;
