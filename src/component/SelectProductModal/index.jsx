import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const SelectProductModal = ({ open, close, data }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog fullWidth maxWidth="xs" open={open} onClose={close}>
        <DialogTitle sx={{ color: "green" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1 }}>
            <CheckCircleOutlineIcon />
            <Typography>{t("This product has been added to the shopping cart")}!</Typography>
          </Box>
        </DialogTitle>
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
                  style={{ height: "90px", width: "90px", objectFit: "contain" }}
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
                <Typography sx={{ fontFamily: "IRANYekanWeb", fontWeight: "bold", fontSize: ".9rem" }}>
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
