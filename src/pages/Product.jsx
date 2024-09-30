import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { currencyFormat } from "../Utils/CurrencyFormat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Product = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Card sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
      <CardMedia
        component="img"
        image={data?.image}
        alt="product"
        sx={{ height: "300px", width: "300px", objectFit: "contain" }}
      />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}
      >
        <Typography>{data?.brand}</Typography>
        <Typography sx={{ fontFamily: "IRANYekanWeb" }}>{data?.name}</Typography>
        <Typography>{currencyFormat(data?.price)}</Typography>
      </CardContent>
      <Button variant="outlined" sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
        <Typography variant="caption" sx={{ fontFamily: "IRANYekanWeb" }}>
          {t("Add To Card")}
        </Typography>
        <Typography variant="caption">
          <ShoppingCartIcon />
        </Typography>
      </Button>
    </Card>
  );
};

export default Product;
