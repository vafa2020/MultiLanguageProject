import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const SelectProductModal = ({ open, close, data }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog fullWidth maxWidth="xs" open={open} onClose={close}>
        <DialogTitle>{t("This product has been added to the shopping cart")}!</DialogTitle>
        <DialogContent>
          <Box
            key={data.id}
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
                  src={data?.image}
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
                  {data?.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: data?.color,
                      borderRadius: "50%",
                      border: "1px solid black",
                    }}
                  ></Typography>
                  <Typography sx={{ fontFamily: "IRANYekanWeb", fontSize: ".8rem" }}>{t(`${data?.color}`)}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>{t("Close")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SelectProductModal;
