import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AccordionActions, Button, Divider } from '@material-ui/core';
import './index.scss';

const useStyles = makeStyles((theme) => ({

    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    button: {
        backgroundColor: '#5cb85c',
        color: '#fff'
    }
}));

export default function ModuleContent(props) {
    const classes = useStyles();
    const { panelName, expanded, handleChange, courseName, courseContent, courseSummary, completeEnabled } = props;
    return (
        <Accordion expanded={expanded === panelName} onChange={handleChange(panelName)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={classes.heading}>{courseName}</Typography>
                <Typography className={classes.secondaryHeading}>{courseSummary}</Typography>

            </AccordionSummary>
            <AccordionDetails>
                <embed type="application/pdf"
                    src={courseContent}
                    frameBorder="0"
                    scrolling="auto"
                    height="600px"
                    width="100%" />
            </AccordionDetails>
            <Divider />
            <AccordionActions>
                <Button size="small" disabled={!completeEnabled} className={classes.button} onClick={() => alert('Course Completed')}>Complete</Button>
            </AccordionActions>
        </Accordion>
    );
}
