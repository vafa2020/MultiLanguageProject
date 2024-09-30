import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { currencyFormat } from "../Utils/CurrencyFormat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStoreCart } from "../store/store";
const ProductNetworkDisplay = ({ data }) => {
  const addToCart = useStoreCart((state) => state.addToCart);
  const cart = useStoreCart((state) => state.cart);
  console.log("cart", cart);
  const { t } = useTranslation();
  return (
    <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
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
        <Button
          variant="outlined"
          sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}
          onClick={() => addToCart(data)}
        >
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

export default ProductNetworkDisplay;
