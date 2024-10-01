import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { currencyFormat } from "../Utils/CurrencyFormat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStoreCart } from "../store/store";
import { useState } from "react";
import SelectProductModal from "../component/SelectProductModal";
const Product = ({ data }) => {
  const addToCart = useStoreCart((state) => state.addToCart);
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  return (
    <>
      <Card sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
        <CardMedia
          component="img"
          image={data?.image}
          alt="product"
          sx={{ height: "250px", width: "250px", objectFit: "contain", p: 2 }}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}
        >
          <Typography>{data?.brand}</Typography>
          <Typography sx={{ fontFamily: "IRANYekanWeb" }}>{data?.name}</Typography>
          <Typography>{currencyFormat(data?.price)}</Typography>
        </CardContent>
        <Button
          variant="outlined"
          sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}
          onClick={() => {
            addToCart(data);
            setModal(true);
          }}
        >
          <Typography variant="caption" sx={{ fontFamily: "IRANYekanWeb" }}>
            {t("Add To Card")}
          </Typography>
          <Typography variant="caption">
            <ShoppingCartIcon />
          </Typography>
        </Button>
      </Card>
      <SelectProductModal open={open} close={() => setModal(false)} />
    </>
  );
};

export default Product;
