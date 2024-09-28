import { useTranslation } from "react-i18next";
import { NavLink, Outlet } from "react-router-dom";

const ProfilePages = () => {
  const { t } = useTranslation();
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div style={{ padding: "10px" }}>
      <ul style={{}}>
        {profiles.map((item) => (
          <li key={item} style={{ padding: "5px", margin: "5px", listStyle: "none" }}>
            <NavLink
              to={`/profiles/${item}`}
              style={({ isActive }) => {
                return { color: isActive ? "pink" : "", textDecoration: isActive ? "none" : "" };
              }}
            >
              {t("Profile")}-{item}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default ProfilePages;
