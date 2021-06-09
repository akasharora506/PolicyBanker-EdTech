import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../Header";
import Title from "../Title";
import ModuleContent from "../ModuleContent";
import "./index.scss";
import Foot from "../Foot";
import { lifeMaterial, generalMaterial } from "./material";

export default function Module(props) {
  const history = useHistory();
  const location = useLocation();
  const DefaultMaterial =
    props.examType === "general" ? [...generalMaterial] : [...lifeMaterial];
  const [expanded, setExpanded] = useState(false);
  const [moduleMaterial, setModuleMaterial] = useState(DefaultMaterial);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleExpire = (courseId) => {
    const newModuleMaterial = moduleMaterial;
    newModuleMaterial[courseId].completeEnabled = true;
    newModuleMaterial[courseId].timeLeft = 0;
    if (courseId < newModuleMaterial.length - 1)
      newModuleMaterial[courseId + 1].displayEnabled = true;
    setModuleMaterial([...newModuleMaterial]);
  };

  const handleComplete = courseId => {
    const newModuleMaterial = [...moduleMaterial];
    newModuleMaterial[courseId].completed = true;
    setExpanded(false);
    setModuleMaterial(newModuleMaterial);
  };

  const handleTakeExam = () => {
    const { pathname } = location;
    history.push(`${pathname}/exam`);
  };
  const examDisabled = () => {
    debugger;
    let flag = false;
    moduleMaterial.forEach(item => {
      if (item.completed === false) flag = true;
    });
    return flag;
  };
  const buttons = [
    {
      name: "Take Exam",
      disabled: examDisabled(),
      onClick: handleTakeExam,
      class: "take-exam"
    }
  ];

  return (
    <div>
      <Header />
      <Title {...props} />
      <div className="module-container">
        <div className="accordian-root">
          {moduleMaterial.map((content, courseId) => (
            <ModuleContent
              handleChange={handleChange}
              panelName={content.panelName}
              expanded={expanded}
              courseName={content.name}
              courseSummary={content.summary}
              courseContent={content.content}
              completeEnabled={content.completeEnabled}
              displayEnabled={content.displayEnabled}
              handleExpire={handleExpire}
              courseId={courseId}
              timeLeft={content.timeLeft}
              key={courseId}
              handleComplete={handleComplete}
              completed={content.completed}
            />
          ))}
        </div>
      </div>
      <Foot buttons={buttons} />
    </div>
  );
}
