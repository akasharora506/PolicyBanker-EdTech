import React, { useState } from 'react';
import Header from '../Header';
import Course from '../Course';
import './index.scss';
import Title from '../Title';
export default function Home() {
    const images = ['https://www.federalbank.co.in/documents/10180/24273596/General+Insurance.jpg/86d2cb9c-7eeb-b59b-d7d5-f47c6acb6817?t=1591769838221',
        'http://www.thefinapolis.com/Portals/0/EasyDNNNews/4871/600600p1134EDNmainlife-insurance-min.jpg'
    ];
    const [courseId, setCourseId] = useState(3);
    return (
        <div className="Homepage">
            <Header />
            <Title />
            <div className="course-grid">
                {(courseId === 1 || courseId === 3) && <Course courseName="General Insurance Certification" imageAddress={images[0]} />}
                {(courseId === 2 || courseId === 3) && <Course courseName="Life Insurance Certification" imageAddress={images[1]} />}
            </div>
        </div>
    );

};