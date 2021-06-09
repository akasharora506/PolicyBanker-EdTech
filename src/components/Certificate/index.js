import React, { useEffect, useState, useContext } from "react";
import "./index.scss";
import { downloadCertificate } from "../../services/downloadCertificate";
// import Pdf from "react-to-pdf";
import { AffiliateContext } from '../../contexts/AffiliateContext';
export default function Certificate(props) {
  const ref = React.createRef();
  const [certificateData, setCertificateData] = useState(null);
  const { affiliateDetails } = useContext(AffiliateContext);
  useEffect(() => {
    if (!certificateData)
      downloadCertificate(affiliateDetails.AffiliateId).then(data => {
        setCertificateData(data);
        console.log("value of certificateData", certificateData);
      });
  }, [certificateData, affiliateDetails]);
  if (!certificateData) return 'Please Wait!';
  return (
    //eslint-disable-next-line
    // <div style="max-width: 700px; margin: 0 auto;" class="main_container">
    <div ref={ref}>
      {/* <Pdf targetRef={ref} filename="Certificate.pdf">
        {({toPdf}) => (
            <button onClick={toPdf} type="button" class="btn btn-primary btn-large btn-block btn-right-aling">Download Certificate</button>
        )}
    </Pdf> */}

      <div class="main_container">
        <table
          align="center"
          cellspacing="0"
          cellpadding="0"
          border="0"
          width="100%"
        >
          <tbody>
            <tr>
              <td valign="top">
                {/* eslint-disable-next-line */}
                {/* <h1 style="margin: 0 0 25px 0; text-align: center; text-transform: uppercase; font-size: 18px;"> */}
                <h1>E-Learning Certificate</h1>
              </td>
            </tr>

            <tr>
              <td valign="top">
                <table width="100%" cellspacing="0" cellpadding="5">
                  <tr>
                    <td valign="top">
                      <p>TO,</p>
                      <p>
                        <strong>{certificateData.Name}</strong>
                      </p>
                      <p>
                        PROP-E-11 FLAT NO-B 2 KH NO-874
                      <br />
                      CHATTARPUR EXTENTION SUMAN CHOWK
                      <br />
                      SOUTH DELHI, DELHI-110074
                    </p>
                    </td>
                    <td valign="top" width="250" align="right">
                      {/* eslint-disable-next-line */}
                      <span>
                        <img src={certificateData.PartnerPic} alt="" />
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td valign="top">
                <p>Dear Sir/Madam,</p>
                <p>We welcome you to SMC family.</p>
              </td>
            </tr>

            <tr>
              <td valign="top">
                <p>
                  This is in reference to the application made by you for
                  enrolling yourself to act as point ofsale person with us.
              </p>
                <p>
                  This is to confirm that you have sucessfully completed the
                  prescribed training and have also passed the examination
                  specified for Point of Sales conducted by SMC insurance Brokers
                  Pvt. Ltd. under the Guidelines of IRDAI regulations for point
                  ofsales person. Your personal details are as under :
              </p>
              </td>
            </tr>

            <tr>
              <td valign="top">
                {/* eslint-disable-next-line */}
                <table width="100%" cellspacing="0" cellpadding="6" border="1">
                  <tr>
                    {/* eslint-disable-next-line */}
                    <td valign="top" width="50%">
                      <label>POS Code :</label>{" "}
                      <strong>{certificateData.POSCode}</strong>
                    </td>
                    <td valign="top" width="50%"></td>
                  </tr>
                  <tr>
                    <td valign="top" width="50%">
                      <label>Aadhar No. :</label> {certificateData.AadhaarNumber}
                    </td>
                    <td valign="top" width="50%">
                      <label>Reg. Mail Id :</label> {certificateData.Email}
                    </td>
                  </tr>
                  <tr>
                    <td valign="top" width="50%">
                      <label>Pan No. :</label> {certificateData.PanNumber}
                    </td>
                    <td valign="top" width="50%">
                      <label>Reg. Phone No. :</label> {certificateData.MobileNo}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td valign="top">
                <p>
                  This letter authorizes you to act as Point of sales Person for
                  SMC insurance brokers to market products categorized and
                  identified under the IRDAI Guidelines only.
              </p>
                <p>
                  In case you wish to work for another Company , you are required
                  to obtain an NOC from us and a fresh letter from the new insurer
                  / insurance intermediary in order to act as point ofsales Person
                  for that entitiy. Thanking you and wish you all the success.
              </p>
              </td>
            </tr>

            <tr>
              <td valign="top">
                <p>Your faithfully</p>
                <p>
                  <strong>R.P. Bagga</strong>
                  <br />
                Principal Officer
              </p>
              SMC Insurance Brokers Pvt. Ltd. <br />
              Parsavnath Metro Mall, Pratap Nagar Metro Station, New
              Delhi-110007 <br />
              Tel : 011-66222266, <br />
              Tollfree no.: 180026663666
              <br />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
