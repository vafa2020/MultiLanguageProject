import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useTranslation } from "react-i18next";

const SelectProductModal = ({ open, close }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={close}>
        <DialogTitle>{t("This product has been added to the shopping cart")}!</DialogTitle>
        <DialogContent>
          <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SelectProductModal;
