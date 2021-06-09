import {
    general1,
    general2,
    general3,
    general4,
    general5,
    life1,
    life2,
    life3,
    life4,
    life5
} from "../../assets";

const COURSE_TIME = 3 * 60 * 60;

const lifeMaterial = [{
    displayEnabled: true,
    completeEnabled: false,
    timeLeft: COURSE_TIME,
    content: life1,
    name: "Course 1",
    summary: "Course Details 1",
    panelName: "panel1",
    completed: false
},
{
    displayEnabled: false,
    completeEnabled: false,
    timeLeft: COURSE_TIME,
    content: life2,
    name: "Course 2",
    summary: "Course Details 2",
    panelName: "panel2",
    completed: false
},
{
    displayEnabled: false,
    completeEnabled: false,
    timeLeft: COURSE_TIME,
    content: life3,
    name: "Course 3",
    summary: "Course Details 3",
    panelName: "panel3",
    completed: false
},
{
    displayEnabled: false,
    completeEnabled: false,
    timeLeft: COURSE_TIME,
    content: life4,
    name: "Course 4",
    summary: "Course Details 4",
    panelName: "panel4",
    completed: false
},
{
    displayEnabled: false,
    completeEnabled: false,
    timeLeft: COURSE_TIME,
    content: life5,
    name: "Course 5",
    summary: "Course Details 5",
    panelName: "panel5",
    completed: false
}
];

const generalMaterial = [
    {
        displayEnabled: true,
        completeEnabled: false,
        timeLeft: COURSE_TIME,
        content: general1,
        name: "Course 1",
        summary: "Course Details 1",
        panelName: "panel1",
        completed: false
    },
    {
        displayEnabled: false,
        completeEnabled: false,
        timeLeft: COURSE_TIME,
        content: general2,
        name: "Course 2",
        summary: "Course Details 2",
        panelName: "panel2",
        completed: false
    },
    {
        displayEnabled: false,
        completeEnabled: false,
        timeLeft: COURSE_TIME,
        content: general3,
        name: "Course 3",
        summary: "Course Details 3",
        panelName: "panel3",
        completed: false
    },
    {
        displayEnabled: false,
        completeEnabled: false,
        timeLeft: COURSE_TIME,
        content: general4,
        name: "Course 4",
        summary: "Course Details 4",
        panelName: "panel4",
        completed: false
    },
    {
        displayEnabled: false,
        completeEnabled: false,
        timeLeft: COURSE_TIME,
        content: general5,
        name: "Course 5",
        summary: "Course Details 5",
        panelName: "panel5",
        completed: false
    }
];

export { lifeMaterial, generalMaterial };
