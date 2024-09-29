import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { currencyFormat } from "../Utils/CurrencyFormat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Product = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardMedia component="img" image={data?.image} alt="product" />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}
      >
        <Typography>{data?.brand}</Typography>
        <Typography sx={{ fontFamily: "IRANYekanWeb" }}>{data?.name}</Typography>
        <Typography>{currencyFormat(data?.price)}</Typography>
        <Button variant="outlined" sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <Typography variant="caption" sx={{ fontFamily: "IRANYekanWeb" }}>
            {t("Add To Card")}
          </Typography>
          <Typography variant="caption">
            <ShoppingCartIcon />
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
