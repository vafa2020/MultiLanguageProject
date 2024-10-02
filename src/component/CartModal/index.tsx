import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Popover, Typography } from "@mui/material";
import React from "react";
import { useStoreCart } from "../../store/store";
import { currencyFormat } from "../../Utils/CurrencyFormat";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import EmptyCart from "../../assets/Picture/empty-cart.svg";
const CartModal = ({ open, close, anchorEl, id }) => {
  const { t } = useTranslation();
  const cart = useStoreCart((state) => state.cart);
  const addToCart = useStoreCart((state) => state.addToCart);
  const removeFromCard = useStoreCart((state) => state.removeFromCard);
  const totalPrice = useStoreCart((state) => state.totalPrice);
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={close}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {cart.length > 0 ? (
          cart.map((product) => (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                <Box>
                  <img
                    src={product?.image}
                    alt="product-image"
                    style={{ height: "80px", width: "80px", objectFit: "contain" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Typography sx={{ fontFamily: "IRANYekanWeb", fontWeight: "bold", fontSize: ".8rem" }}>
                    {product?.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: product?.color,
                        borderRadius: "50%",
                        border: "1px solid black",
                      }}
                    ></Typography>
                    <Typography sx={{ fontFamily: "IRANYekanWeb", fontSize: ".8rem" }}>
                      {t(`${product?.color}`)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      py: "5px",
                    }}
                  >
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => addToCart(product)}
                      sx={{ padding: "0 !important" }}
                    >
                      <AddIcon sx={{ color: "red" }} />
                    </Button>
                    <Typography>{product.quntity}</Typography>
                    <Button
                      variant="text"
                      onClick={() => removeFromCard(product.id)}
                      size="small"
                      sx={{ padding: "0 !important" }}
                    >
                      {product.quntity === 1 ? (
                        <DeleteIcon sx={{ color: "red" }} />
                      ) : (
                        <RemoveIcon sx={{ color: "red" }} />
                      )}
                    </Button>
                  </Box>
                  <Typography>{currencyFormat(product?.price * product.quntity)}</Typography>
                </Box>
              </Box>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "328px",
              padding: "1rem",
            }}
          >
            <img src={EmptyCart} alt="EmptyCart" style={{ height: "100px" }} />
            <Typography>{t("Cart Is Empty")}</Typography>
          </Box>
        )}
        <Divider />
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography>{t("Amount payable")}</Typography>
            <Typography sx={{ color: "green" }}>{currencyFormat(totalPrice)}</Typography>
          </Box>
          <Button variant="contained">{t("Final check")}</Button>
        </Box>
      </Popover>
    </>
  );
};

export default CartModal;
