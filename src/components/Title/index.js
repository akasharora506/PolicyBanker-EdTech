import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import './index.scss';
import { courseIcon } from '../../assets';
export default function Title() {
    return (
        <div className="title-bar">
            <div className="navigation-bar">
                <HomeIcon fontSize="small" />
            </div>
            <div className="about-bar">
                <img className="book-logo" src={courseIcon}></img>
                <div className="titlebar-text">
                    <p className="titlebar-head">All Courses</p>
                    <p className="titlebar-details">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                        </p>
                </div>
            </div>
        </div>
    )
}
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
