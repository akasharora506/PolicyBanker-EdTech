import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import "./index.scss";
import { downloadCertificate } from "../../services/downloadCertificate";
import Certificate from "../Certificate";

export default function TransitionModal(props) {
  const { handleClose, open, score, questionLength } = props;
  const renderModalContent = () => {
    if (score / questionLength >= 11 / 30) {
      return (
        <div className="modal-body">
          <p className="modal-text">
            You have successfully completed your exam.
          </p>
          <div className="modal-buttons">
            <div className="single-button">
              <div className="button-icon">
                <EmojiEventsIcon />
              </div>
              <div className="single-button-text">
                <div className="result-text">RESULT</div>
                <div className="result-passed">Passed</div>
              </div>
            </div>
            <div className="single-button">
              <div className="button-icon">
                <CloudDownloadIcon />
              </div>
              <div className="single-button-text">
                <div className="result-text">DOWNLOAD</div>
                <div onClick={()=> window.open('/general/certificate', "_blank")} className="certificate">
                  Certificate
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal-body">
          <p className="modal-text">
            You have successfully completed your exam.
          </p>
          <div className="modal-buttons">
            <div className="single-button">
              <div className="button-icon">
                <EmojiEventsIcon />
              </div>
              <div className="single-button-text">
                <div className="result-text">RESULT</div>
                <div className="result-failed">Failed</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal-root"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline"
        }}
      >
        <Fade in={open}>
          <div className="modal-paper">{renderModalContent()}</div>
        </Fade>
      </Modal>
      {/* <Certificate data={certificateData}></Certificate> */}
    </div>
  );
}
