import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header';
import Course from '../Course';
import './index.scss';
import Title from '../Title';
import { Link } from 'react-router-dom';
import { AffiliateContext } from '../../contexts/AffiliateContext';
export default function Home(props) {
    const images = ['https://www.federalbank.co.in/documents/10180/24273596/General+Insurance.jpg/86d2cb9c-7eeb-b59b-d7d5-f47c6acb6817?t=1591769838221',
        'http://www.thefinapolis.com/Portals/0/EasyDNNNews/4871/600600p1134EDNmainlife-insurance-min.jpg'
    ];
    //eslint-disable-next-line
    const [courseId, setCourseId] = useState('0');
    const { affiliateDetails } = useContext(AffiliateContext);
    useEffect(() => {
        if (affiliateDetails.CourseId) setCourseId(affiliateDetails.CourseId);
    }, [affiliateDetails]);
    return (
        <div className="Homepage">
            <Header />
            <Title {...props} />
            <div className="course-grid">
                {(courseId === '2' || courseId === '3') &&
                    <Link to="/general" style={{
                        textDecoration: 'none'
                    }}>
                        <Course courseType="general" courseName="General Insurance Certification" imageAddress={images[0]} />
                    </Link>
                }
                {(courseId === '1' || courseId === '3') &&
                    <Link to="/life" style={{
                        textDecoration: 'none'
                    }}>
                        <Course courseType="life" courseName="Life Insurance Certification" imageAddress={images[1]} />
                    </Link>
                }
            </div>
        </div>
    );

};