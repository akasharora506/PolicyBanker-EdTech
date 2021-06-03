import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.scss';
import { TITLES } from '../../constant';
export default function Title(props) {
    const { title, subTitle, displayIcon, showDownload } = props;
    return (
        <div className="title-bar">
            {title !== TITLES['home'] && <div className="navigation-bar">
                <Link to="/" style={{
                    color: '#fff'
                }}>
                    <HomeIcon fontSize="small" />
                </Link>
            </div>}
            <div className="about-bar">
                <img className="book-logo" src={displayIcon} alt={displayIcon}></img>
                <div className="titlebar-text">
                    <p className="titlebar-head">{title}</p>
                    <p className="titlebar-details">{subTitle}</p>
                </div>
                {showDownload && <div className="button-download">
                    <Button size="large" className="download-certificate">Download Certificate</Button>
                </div>}
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

Title.defaultProps = {
    showDownload: false
};
