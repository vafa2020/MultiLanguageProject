import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { t } = useTranslation();

  const params = useParams();
  console.log("params", params);
  return (
    <div>
      {t("Profile")}-{params.id}
    </div>
  );
};

export default ProfilePage;
