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
import { AffiliateContext } from '../../contexts/AffiliateContext';
import { useContext } from 'react';
import { getTimeRemaining } from '../../services/getTimeRemaining';
import { EXAM_NUMBER } from '../../constant';
import { Date } from 'globalthis/implementation';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ModuleContent(props) {

    const { panelName, expanded, handleChange, courseContent,
        completeEnabled, displayEnabled, handleExpire, courseId,
        examType, handleComplete } = props;
    const { affiliateDetails: { AffiliateId } } = useContext(AffiliateContext);
    const [expiryTime, setExpiryTime] = useState(new Date());
    const [completed, setCompleted] = useState(false);
    useEffect(() => {
        await getTimeRemaining(AffiliateId, EXAM_NUMBER[examType], courseId + 1).then((data) => {
            const newExpiryTime = new Date();
            newExpiryTime.setSeconds(newExpiryTime.getSeconds() + data.time);
            console.log(newExpiryTime);
            setExpiryTime(newExpiryTime);
            setCompleted(data.completed);
        });

    }, []);

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
                    expiryTimestamp={expiryTime}
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
