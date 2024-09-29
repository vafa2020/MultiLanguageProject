import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Product from "./Product";
import Filter from "../component/Filter";
import { Box, Button, ButtonGroup, Pagination, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { useState } from "react";
import ProductNetworkDisplay from "./ProductNetworkDisplay";
const Products = () => {
  const { t } = useTranslation();
  const products = useQuery({
    queryKey: ["products"],
    queryFn: () => axios.get("http://localhost:8000/perfume").then(({ data }) => data),
  });
  const [networkDispaly, setNetworkDisplay] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 3;
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  // console.log("products", products.data);
  return (
    <Grid container spacing={0} sx={{ alignItems: "flex-start", my: "3rem" }}>
      <Grid sx={{ paddingX: "1rem" }} size={{ xs: 12, md: 3 }}>
        <Filter />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }} sx={{ alignItems: "flex-start", paddingX: "3rem" }}>
        <Box sx={{ mb: "1rem", position: "relative" }}>
          <TextField id="outlined-basic" label={t("search...")} variant="outlined" size="small" fullWidth />
          <SearchIcon sx={{ position: "absolute", right: 20, top: 10 }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: "1rem" }}>
          <Typography>Showing: 10 products</Typography>
          <Box>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button variant={networkDispaly ? "contained" : "outlined"} onClick={() => setNetworkDisplay(true)}>
                <GridOnIcon />
              </Button>
              <Button variant={!networkDispaly ? "contained" : "outlined"} onClick={() => setNetworkDisplay(false)}>
                <TableRowsIcon />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
          {products.data.slice(indexOfFirstCard, indexOfLastCard)?.map((product) =>
            networkDispaly ? (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProductNetworkDisplay data={product} />
              </Grid>
            ) : (
              <Grid key={product.id} size={{ xs: 12 }}>
                <Product data={product} />
              </Grid>
            )
          )}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={Math.ceil(products.data.length / cardPerPage)}
            variant="outlined"
            shape="rounded"
            onChange={(e, page) => setCurrentPage(page)}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Products;
