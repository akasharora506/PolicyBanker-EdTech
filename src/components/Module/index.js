import React, { useState } from 'react';
import Header from '../Header';
import Title from '../Title';
import ModuleContent from '../ModuleContent';
import './index.scss';
import { randomPdf } from '../../assets';
export default function Module(props) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <Header />
            <Title {...props} />
            <div className="module-container">
                <div className="accordian-root">
                    <ModuleContent
                        handleChange={handleChange}
                        panelName='panel1'
                        expanded={expanded}
                        courseName='Course 1'
                        courseSummary='Course Details 1'
                        courseContent={randomPdf}
                        completeEnabled={true}
                    />
                </div>
                <div className="accordian-root">
                    <ModuleContent
                        handleChange={handleChange}
                        panelName='panel2'
                        expanded={expanded}
                        courseName='Course 2'
                        courseSummary='Course Details 2'
                        courseContent={randomPdf}
                        completeEnabled={false}
                    />
                </div>
            </div>
        </div>
    )
}
