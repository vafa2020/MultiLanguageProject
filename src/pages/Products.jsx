import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "./Product";
const Products = () => {
  const { t } = useTranslation();
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => axios.get("http://localhost:8000/perfume").then(({ data }) => data),
  });

  console.log("products", products.data);
  return (
    <Grid container spacing={2} sx={{ mt: "1rem" }}>
      <Grid size={{ xs: 12, md: 3 }}></Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }} sx={{ padding: "3rem" }}>
          {products.data?.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Product data={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
