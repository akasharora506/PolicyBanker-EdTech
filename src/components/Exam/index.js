import React, { useState } from 'react';

import Header from '../Header';
import Title from '../Title';
import Question from '../Question';
import Modal from '../Modal';
import Foot from '../Foot';
import Timer from '../Timer';
import { TITLES, PAGE_ICON } from '../../constant';
import { lifeQuestions, generalQuestions } from '../../assets';
import './index.scss';

export default function Exam(props) {

    const { examType } = props;

    const defaultQuestions = examType === 'general' ? { ...generalQuestions } : { ...lifeQuestions };

    const [expanded, setExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [questions, setQuestions] = useState(defaultQuestions);


    const handleClose = () => {
        setOpen(false);
        resetQuestion();
    };
    const calculateScore = () => {
        let ans = 0;
        Object.values(questions).forEach((item) => {
            if (item.selectedAnswer === item.answer) ans++;
        });
        return ans;
    };

    const resetQuestion = () => {
        setScore(0);
        const newQuestions = { ...questions };
        Object.values(newQuestions).forEach((item) => {
            item.selectedAnswer = 0;
        });
        setQuestions(newQuestions);
    };

    const handleFinishExam = (exam) => {
        console.log(exam);
        setScore(calculateScore());
        setOpen(true);
    };

    const buttons = [
        {
            name: 'Finish Exam',
            class: 'take-exam',
            onClick: handleFinishExam,

        }
    ];

    const handleSelectAnswer = (event, qid) => {
        const newQuestions = { ...questions };
        newQuestions[qid].selectedAnswer = newQuestions[qid].options.indexOf(event.target.value) + 1;
        setQuestions(newQuestions);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const getExpiryTime = () => {
        const expiryTime = new Date();
        expiryTime.setSeconds(expiryTime.getSeconds() + 45 * 60);
        return expiryTime;
    };
    return (
        <div>
            <Header />
            <Title title={TITLES[examType + "exam"]} displayIcon={PAGE_ICON["exam"]} />
            <Timer
                expiryTimestamp={getExpiryTime()}
                courseId={examType}
                handleExpire={handleFinishExam}
                expanded={true}
                panelName={true}
                className="exam-timer"
            />
            <Modal
                open={open}
                handleClose={handleClose}
                score={score}
                questionLength={Object.keys(questions).length}
            />
            <div className="question-container">
                <div className="accordian-root">
                    {Object.entries(questions).map((item) =>
                        <Question
                            qid={item[0]}
                            options={item[1].options}
                            statement={item[1].statement}
                            handleSelectAnswer={handleSelectAnswer}
                            key={item[0]}
                            expanded={expanded}
                            handleChange={handleChange}
                            selectedAnswer={item[1].selectedAnswer}
                        />
                    )}
                </div>
            </div>
            <Foot buttons={buttons} />
        </div>
    )
}
