import React, { useContext } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './index.scss';
import { TITLES, EXAM_NUMBER } from '../../constant';
import { validateCertificate } from '../../services/validateCertificate';
import { AffiliateContext } from '../../contexts/AffiliateContext';
export default function Title(props) {
    const { title, displayIcon, showDownload, examType } = props;
    const { affiliateDetails } = useContext(AffiliateContext);
    const download = () => {
        debugger
        console.log("affiliateDetails : ", affiliateDetails);
        validateCertificate(affiliateDetails.AffiliateId, EXAM_NUMBER[examType]).then(data => {
            if (data && data.status) {
                window.open('/general/certificate', "_blank");
            }
        }).catch((err) => {
            console.log('Error occured : validation Failed')
        });
    };
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
                </div>
                {showDownload && <div className="button-download">
                    <Button size="large" onClick={download} className="download-certificate">Download Certificate</Button>
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
