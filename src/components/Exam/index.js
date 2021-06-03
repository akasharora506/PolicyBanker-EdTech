import React, { useState } from 'react';

import Header from '../Header';
import Title from '../Title';
import Question from '../Question';
import Foot from '../Foot';
import { TITLES, PAGE_ICON } from '../../constant';
import './index.scss';

export default function Exam(props) {

    const { examType } = props;
    const [expanded, setExpanded] = useState(false);

    const calculateScore = () => {
        let ans = 0;
        Object.values(questions).forEach((item) => {
            if (item.selectedAnswer === item.answer) ans++;
        });
        return ans;
    };

    const resetQuestion = () => {
        const newQuestions = { ...questions };
        Object.values(newQuestions).forEach((item) => {
            item.selectedAnswer = '';
        });
        setQuestions(newQuestions);
    };

    const handleFinishExam = () => {
        const score = calculateScore();
        if (score / Object.keys(questions).length >= 11 / 30)
            alert("passed");
        else
            alert("failed");
        resetQuestion();
    };

    const buttons = [
        {
            name: 'Finish Exam',
            class: 'take-exam',
            onClick: handleFinishExam,

        }
    ];
    const [questions, setQuestions] = useState({
        '1': {
            statement: 'What is Lorem Ipsum?',
            options: ['a', 'b', 'c', 'd'],
            answer: 'b',
            selectedAnswer: '',
        },
        '2': {
            statement: 'Can you help translate this site into a foreign language?',
            options: ['a', 'b', 'c', 'd'],
            answer: 'b',
            selectedAnswer: '',
        },
        '3': {
            statement: 'Why do we use it?',
            options: ['a', 'b', 'c', 'd'],
            answer: 'c',
            selectedAnswer: '',
        },
        '4': {
            statement: 'Where can I get some?',
            options: ['a', 'b', 'c', 'd'],
            answer: 'd',
            selectedAnswer: '',
        },
        '5': {
            statement: 'Where does it come from?',
            options: ['a', 'b', 'c', 'd'],
            answer: 'a',
            selectedAnswer: '',
        }
    });

    const handleSelectAnswer = (event, qid) => {
        const newQuestions = { ...questions };
        console.log(event, qid);
        newQuestions[qid].selectedAnswer = event.target.value;
        setQuestions(newQuestions);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Header />
            <Title title={TITLES[examType + "exam"]} displayIcon={PAGE_ICON["exam"]} />
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
