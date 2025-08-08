import React from "react";
import { useParams } from "react-router-dom";

import RightToEquality from "../components/RightToEquality";
import RightToFreedom from "../components/RightToFreedom";
import RightAgainstExploitation from "./RightAgainstExploitation";
import RightToEducation from "../components/RightToEducation";
import RightToFreedomOfReligion from "../components/RightToFreedomOfReligion";
import CulturalAndEducationalRights from "./CulturalAndEducationalRights";

function RightDetailWrapper() {
  const { rightName } = useParams();

  const components = {
    "right-to-equality": <RightToEquality />,
    "right-to-freedom": <RightToFreedom />,
    "right-against-exploitation": <RightAgainstExploitation />,
    "right-to-education": <RightToEducation />,
    "right-to-freedom-of-religion": <RightToFreedomOfReligion />,
    "cultural-and-educational-rights": <CulturalAndEducationalRights />
  };


const RightDetailWrapper = () => {
  const { rightPath } = useParams();
  const SelectedRightComponent = rightsComponents[rightPath];

  if (!SelectedRightComponent) {
    return (
      <div className="container mt-5">
        <h2 className="text-danger">404 - Right Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {SelectedRightComponent}
    </div>
  );
};

export default RightDetailWrapper;
