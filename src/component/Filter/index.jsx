import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Card } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = () => {
  return (
    <div>
      <Card sx={{ padding: ".5rem" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </Card>
    </div>
  );
};

export default Filter;
