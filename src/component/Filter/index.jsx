import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
import CheckIcon from "@mui/icons-material/Check";
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
const brands = ["Peugeot", "Porsche", "Toyota", "Bmw"];
const Filter = ({ data, setFilter, filter }) => {
  const { t } = useTranslation();
  const handleChange = (e) => {
    setFilter((prev) => {
      return {
        ...prev,
        brand: e.target.name,
      };
    });
  };
  return (
    <div>
      <Card sx={{ padding: ".5rem" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            {t("brand")}
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {brands.map((brand, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox checked={brand === filter?.brand} name={`${brand}`} onChange={handleChange} />}
                  label={brand}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            {t("price")}
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            {t("color")}
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              {colors?.map((color, index) => (
                <Grid
                  key={index}
                  size={{ xs: 3, md: 2 }}
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
                        <Typography variant="caption" sx={{ position: "absolute", top: 0, left: 0 }}>
                          <CheckIcon
                            sx={{
                              fontSize: "1rem",
                              color: color === "white" || color === "yellow" || color === "gold" ? "black" : "white",
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
    </div>
  );
};

export default Filter;
