import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import queryString from 'query-string';
import Exam from './components/Exam';
import Home from './components/Home';
import Module from './components/Module';
import { TITLES, SUBTITLES, PAGE_ICON } from './constant';
import Certificate from './components/Certificate';
import { AffiliateContext } from './contexts/AffiliateContext';
import { localStorage } from 'globalthis/implementation';


function App() {
  const [affiliateDetails, setAffiliateDetails] = useState({
    AffiliateId: '',
    CourseId: ''
  });
  useEffect(() => {
    const userDetails = queryString.parse(window.location.search);
    if (userDetails.AffiliateId || userDetails.CourseId) {
      localStorage.setItem('AffiliateId', userDetails.AffiliateId);
      localStorage.setItem('CourseId', userDetails.CourseId);
    };
    const affiliateId = localStorage.getItem('AffiliateId');
    const courseId = localStorage.getItem('CourseId');
    setAffiliateDetails({ ...affiliateDetails, AffiliateId: affiliateId, CourseId: courseId });
    // eslint-disable-next-line
  }, []);

  return (
    <AffiliateContext.Provider value={{ affiliateDetails }}>
      <Router>
        <div className="App" style={{
          height: '100vh'
        }}>
          <Switch className="switch">
            <Route exact path="/">
              <Home title={TITLES['home']} subTitle={SUBTITLES['home']} displayIcon={PAGE_ICON['home']} />
            </Route>
            {(affiliateDetails.CourseId === '2' || affiliateDetails.CourseId === '3') &&
              <Route exact path="/general">
                <Module title={TITLES['general']} subTitle={SUBTITLES['general']} displayIcon={PAGE_ICON['general']} showDownload={true} examType="general" />
              </Route>
            }
            {(affiliateDetails.CourseId === '2' || affiliateDetails.CourseId === '3') &&
              <Route exact path="/general/exam">
                <Exam examType="general" />
              </Route>
            }
            {(affiliateDetails.CourseId === '1' || affiliateDetails.CourseId === '3') &&
              <Route exact path="/life">
                <Module title={TITLES['life']} subTitle={SUBTITLES['life']} displayIcon={PAGE_ICON['life']} showDownload={true} examType="life" />
              </Route>
            }
            {(affiliateDetails.CourseId === '1' || affiliateDetails.CourseId === '3') &&
              <Route exact path="/life/exam">
                <Exam examType="life" />
              </Route>
            }
             <Route exact path="/general/certificate">
              <Certificate examType="general" />
            </Route>
          </Switch>
        </div>
      </Router>
    </AffiliateContext.Provider>
  );
}

export default App;
