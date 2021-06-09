import { courseIcon, openCourseIcon, examIcon } from './assets';
const TITLES = {
    'home': 'All Courses',
    'general': 'General Insurance Certification',
    'life': 'Life Insurance Certification',
    'generalexam': 'Exam - General Insurance Certification',
    'lifeexam': 'Exam - Life Insurance Certification'
};

const SUBTITLES = {
    'home': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'general': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'life': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
};

const PAGE_ICON = {
    'home': courseIcon,
    'general': openCourseIcon,
    'life': openCourseIcon,
    'exam': examIcon
}

const EXAM_NUMBER = {
    'life': 1,
    'general': 2,
}
export { TITLES, SUBTITLES, PAGE_ICON, EXAM_NUMBER };