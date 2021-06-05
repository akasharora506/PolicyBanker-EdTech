import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AccordionActions, Avatar, Button, Divider } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Timer from '../Timer';
import './index.scss';

export default function ModuleContent(props) {

    const { panelName, expanded, handleChange, courseContent,
        completeEnabled, displayEnabled, handleExpire, courseId,
        timeLeft, completed, handleComplete } = props;

    const time = new Date();
    time.setSeconds(time.getSeconds() + timeLeft);

    return (
        <Accordion disabled={!displayEnabled} expanded={expanded === panelName} onChange={handleChange(panelName)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="accordian-summary"
            >
                {completed ? <CheckCircleOutlineIcon className="completed-icon" />
                    : <Avatar className="number-icon">
                        {courseId + 1}
                    </Avatar>
                }
                <Typography className="accordian-heading">{`Chapter ${courseId + 1}`}</Typography>
                <Timer
                    expiryTimestamp={time}
                    expanded={expanded}
                    panelName={panelName}
                    handleExpire={handleExpire}
                    courseId={courseId}
                />
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
            {!completed && <AccordionActions>
                <Button size="small" disabled={!completeEnabled} className="complete-button" onClick={() => handleComplete(courseId)}>Complete</Button>
            </AccordionActions>}
        </Accordion>
    );
}
