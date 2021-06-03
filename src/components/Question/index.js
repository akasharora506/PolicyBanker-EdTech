import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import './index.scss';

export default function Question(props) {
    const { qid, statement, expanded, handleChange, selectedAnswer, handleSelectAnswer, options } = props;
    return (
        <Accordion expanded={expanded === qid} onChange={handleChange(qid)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="accordian-summary"
            >
                <Avatar className="number-icon">
                    {qid}
                </Avatar>

                <Typography className="accordian-heading">{statement}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={selectedAnswer} onChange={(e) => handleSelectAnswer(e, qid)}>
                        {options.map((item) =>
                            <FormControlLabel
                                value={item}
                                control={<Radio />}
                                label={item}
                            />
                        )}
                    </RadioGroup>
                </FormControl>
            </AccordionDetails>

        </Accordion>
    );
}
