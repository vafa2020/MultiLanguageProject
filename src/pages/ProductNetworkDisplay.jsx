import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { currencyFormat } from "../Utils/CurrencyFormat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStoreCart } from "../store/store";
import SelectProductModal from "../component/SelectProductModal";
import { useState } from "react";
const ProductNetworkDisplay = ({ data }) => {
  const addToCart = useStoreCart((state) => state.addToCart);
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);

  return (
    <>
      <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <CardMedia
          component="img"
          image={data?.image}
          alt="product"
          sx={{ height: "250px", width: "250px", objectFit: "contain", padding: 2 }}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }}
        >
          <Typography>{data?.brand}</Typography>
          <Typography sx={{ fontFamily: "IRANYekanWeb", fontSize: ".8rem" }}>{data?.name}</Typography>
          <Typography>{currencyFormat(data?.price)}</Typography>
          <Button
            variant="outlined"
            sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}
            onClick={() => {
              setModal(true);
              addToCart(data);
            }}
          >
            <Typography variant="caption">{t("Add To Card")}</Typography>
            <Typography variant="caption">
              <ShoppingCartIcon />
            </Typography>
          </Button>
        </CardContent>
      </Card>
      <SelectProductModal open={modal} close={() => setModal(false)} data={data} />
    </>
  );
};

export default ProductNetworkDisplay;
