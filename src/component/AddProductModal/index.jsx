import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const AddProductModal = ({ open, close }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const insertProduct = useMutation({
    mutationKey: ["insert-product"],
    mutationFn: (data) => axios.post("http://localhost:8000/car", data),
    onSuccess: (data) => {
      if (data.status === 201) {
        queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  const onSubmit = async (data) => {
    await insertProduct.mutateAsync(data);
  };

  useEffect(() => {
    if (open) {
      reset({});
    }
  }, [open]);
  return (
    <div>
      <Dialog
        open={open}
        onClose={close}
        maxWidth="md"
        fullWidth
        PaperProps={{
          component: "form",
          onSubmit: (e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{t("Add New Car")}</DialogTitle>
        <DialogContent>
          <Grid container spacing={1} sx={{ marginTop: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label={t("name")} size="small" id="name" {...register("name")} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label={t("brand")} size="small" id="brand" {...register("brand")} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label={t("color")} size="small" id="color" {...register("color")} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField fullWidth label={t("price")} size="small" id="price" type="number" {...register("price")} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit">{t("Insert")}</Button>
          <Button onClick={close}>{t("Close")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProductModal;
// {
//     "id": 15,
//     "name": "نیسان جوک اسپرت اتوماتیک سال 2017",
//     "price": 3480000000,
//     "color": "black",
//     "brand": "Nissan",
//     "image": "../src/assets/Picture/nissan-juke.webp"
//   },
