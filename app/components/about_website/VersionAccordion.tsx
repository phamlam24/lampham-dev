import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Chip,
  Grid,
  Divider,
} from "@mui/material";
import { Update, UpdateType } from "app/classes/about_website/Changelog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getShowDate } from "app/helpers/date";

class VersionAccordionProps {
  version: Update;
  versionString: string;
  className?: string;
}

// Accordion
export default function VersionAccordion({
  version,
  versionString,
  className = "",
}: VersionAccordionProps) {
  function getUpdateTypeProp() {
    switch (version.type) {
      case UpdateType.Major:
        return <Chip label="Major" size="small" color="primary"></Chip>;
      case UpdateType.Minor:
        return <Chip label="Minor" size="small" color="secondary"></Chip>;
      case UpdateType.Patch:
        return <Chip label="Patch" size="small"></Chip>;
    }
  }

  return (
    <Accordion className={className}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="mr-3"
        >
          <Grid item sm={9} container direction="row" alignItems="center">
            <Grid item>
              <Typography component="span">{version.title}</Typography>
            </Grid>
            <Grid item>
              <Chip label={versionString} className="mx-3" size="small" />
            </Grid>
          </Grid>
          <Grid
            item
            sm={3}
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography variant="caption" display="block" sx={{marginRight: 1.5}}>{getShowDate(version.date)}</Typography>
            </Grid>
            <Grid item>{getUpdateTypeProp()}</Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <i className="mb-3 text-sm">{version.notes}</i>
        <Divider sx={{marginTop: "0.75rem"}}/>
        <ul className="mt-3">
          {version.details.map((detail, index) => (
            <li key={index} className="text-sm list-disc ml-3">{detail}</li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}
