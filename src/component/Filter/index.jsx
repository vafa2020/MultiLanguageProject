import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import CheckIcon from "@mui/icons-material/Check";
import { currencyFormat } from "../../Utils/CurrencyFormat";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CategoryIcon from "@mui/icons-material/Category";
const colors = [
  "red",
  "green",
  "blue",
  "black",
  "pink",
  "gold",
  "purple",
  "grey",
  "yellow",
  "orange",
  "white",
  "brown",
];
const brands = ["Peugeot", "Porsche", "Toyota", "Bmw", "Nissan"];
const MAX = 8000000000;
const MIN = 200000000;
const Filter = ({ data, setFilter, filter }) => {
  const { t } = useTranslation();
  const marks = [
    {
      value: MIN,
      label: t("cheap"),
    },
    {
      value: MAX,
      label: t("Expensive"),
    },
  ];
  const handleChange = (e) => {
    setFilter((prev) => {
      return {
        ...prev,
        brand: e.target.name,
      };
    });
  };

  const handleChangePrice = (_, newValue) => {
    setFilter((prev) => {
      return {
        ...prev,
        price: newValue,
      };
    });
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb:1
        }}
      >
        <ButtonGroup
          variant="contained"
          color="secondary"
          aria-label="Basic button group"
          sx={{ width: "100%" }}
        >
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={() =>
              setFilter({
                color: null,
                brand: null,
                price: 0,
              })
            }
          >
            <Tooltip title={t("Reset Filter")}>
              <DoNotDisturbOnIcon />
            </Tooltip>
          </Button>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            onClick={() =>
              setFilter({
                ...filter,
                brand: null,
              })
            }
          >
            <Tooltip title={t("brand")}>
              <CategoryIcon />
            </Tooltip>
          </Button>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            onClick={() =>
              setFilter({
                ...filter,
                color: null,
              })
            }
          >
            <Tooltip title={t("color")}>
              <ColorLensIcon />
            </Tooltip>
          </Button>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={() =>
              setFilter({
                ...filter,
                price: 0,
              })
            }
          >
            <Tooltip title={t("price")}>
              <AttachMoneyIcon />
            </Tooltip>
          </Button>
        </ButtonGroup>
      </Box>
      <Card sx={{ padding: ".5rem" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontFamily: "IRANYekanWeb",
                fontSize: "1rem",
                my: "1rem",
              }}
            >
              {t("Filters")}
            </Typography>
            <FilterAltIcon />
          </Box>
        </Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {t("brand")}
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {brands.map((brand, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={brand === filter?.brand}
                      name={`${brand}`}
                      onChange={handleChange}
                    />
                  }
                  label={brand}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            {t("price")}
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ width: 250 }}>
              <Slider
                marks={marks}
                step={10}
                value={filter.price}
                valueLabelDisplay="auto"
                min={MIN}
                max={MAX}
                onChange={handleChangePrice}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  onClick={() =>
                    setFilter((prev) => {
                      return { ...prev, price: MIN };
                    })
                  }
                  sx={{ cursor: "pointer" }}
                >
                  {currencyFormat(MIN)} {t("min")}
                </Typography>
                <Typography
                  variant="body2"
                  onClick={() =>
                    setFilter((prev) => {
                      return { ...prev, price: MAX };
                    })
                  }
                  sx={{ cursor: "pointer" }}
                >
                  {currencyFormat(MAX)} {t("max")}
                </Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            {t("color")}
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {colors?.map((color, index) => (
                <Grid
                  key={index}
                  size={{ xs: 3, md: 2 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Tooltip title={t(`${color}`)} placement="top" arrow>
                    <Box
                      onClick={() =>
                        setFilter((prev) => {
                          return { ...prev, color: color };
                        })
                      }
                      sx={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: color,
                        cursor: "pointer",
                        border: `1px solid #94a3b8`,
                        position: "relative",
                      }}
                    >
                      {filter?.color === color && (
                        <Typography
                          variant="caption"
                          sx={{ position: "absolute", top: 0, left: 0 }}
                        >
                          <CheckIcon
                            sx={{
                              fontSize: "1rem",
                              color:
                                color === "white" ||
                                color === "yellow" ||
                                color === "gold"
                                  ? "black"
                                  : "white",
                            }}
                          />
                        </Typography>
                      )}
                    </Box>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
};

export default Filter;
