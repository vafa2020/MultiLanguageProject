import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();

  const LinkStyle = { textDecoration: "none" };
  return (
    <div>
      <h1>NotFound!!!! 404 </h1>
      <Link style={LinkStyle} to="/">
        {t("Home")}
      </Link>
    </div>
  );
};

export default NotFound;
