import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Product = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardMedia component="img" image={data?.image} alt="product" />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}
      >
        <Typography>{data?.brand}</Typography>
        <Typography>{data?.name}</Typography>
        <Typography>{data?.price}</Typography>
      </CardContent>
      <CardActions>
        <Button>{t("Add To Card")}</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
