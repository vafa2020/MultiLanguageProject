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
  const [filter, setFilter] = useState({
    color: null,
    brand: null,
    price: 0,
  });
  const products = useQuery({
    queryKey: ["products", filter.color, filter.brand, filter.price],
    queryFn: () => axios.get("http://localhost:8000/car").then(({ data }) => data),
  });
  // console.log("filter", filter);
  const [searchInput, setSearchInput] = useState("");
  const [networkDispaly, setNetworkDisplay] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 3;
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;

  const afterSearch = () => {
    return products.data?.filter((product) => {
      if (searchInput.length > 0) {
        for (const property of Object.values(product)) {
          if (property.toString().toLowerCase().includes(searchInput.toLowerCase())) {
            return product;
          }
        }
      } else {
        return true;
      }
    });
  };

  const filterData = afterSearch()?.filter((product) => {
    return (
      (filter.brand === null || filter.brand.toLowerCase() === product.brand.toLowerCase()) &&
      (filter.color === null || filter.color.toLowerCase() === product.color.toLowerCase()) &&
      (filter.price === 0 || filter.price >= product.price)
    );
  });
  return (
    <Grid container spacing={0} sx={{ alignItems: "flex-start", my: "3rem" }}>
      <Grid sx={{ paddingX: "1rem" }} size={{ xs: 12, md: 3 }}>
        <Filter data={products.data} setFilter={setFilter} filter={filter} />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }} sx={{ alignItems: "flex-start", paddingX: "3rem" }}>
        <Box sx={{ mb: "1rem", position: "relative" }}>
          <TextField
            id="outlined-basic"
            label={t("search...")}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchIcon sx={{ position: "absolute", right: 20, top: 10 }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: "1rem" }}>
          <Typography>
            {t("Showing")}: {filterData?.length} {t("product")}
          </Typography>
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
          {products.data?.length > 0 ? (
            filterData?.slice(indexOfFirstCard, indexOfLastCard)?.map((product) =>
              networkDispaly ? (
                <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ProductNetworkDisplay data={product} />
                </Grid>
              ) : (
                <Grid key={product.id} size={{ xs: 12 }}>
                  <Product data={product} />
                </Grid>
              )
            )
          ) : (
            <Typography sx={{ color: "red" }}>{t("There Are Not Product")}.</Typography>
          )}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={
              searchInput.length > 0 || filter.brand !== null || filter.color !== null || filter.price > 0
                ? Math.ceil(filterData?.length / cardPerPage)
                : Math.ceil(products.data?.length / cardPerPage)
            }
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
