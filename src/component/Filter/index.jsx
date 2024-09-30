import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  alpha,
  Box,
  Button,
  Card,
  darken,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid2";
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
const Filter = ({ data, setFilter }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Card sx={{ padding: ".5rem" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            {t("brand")}
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
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
                      }}
                    ></Box>
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
