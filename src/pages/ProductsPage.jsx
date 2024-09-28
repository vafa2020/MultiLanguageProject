import { useTranslation } from "react-i18next";

const ProductsPage = () => {
  const { t } = useTranslation();
  return <div>{t("Product")}</div>;
};

export default ProductsPage;
