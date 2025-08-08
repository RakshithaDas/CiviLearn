// src/pages/RightsModule.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Modules.css"; // Optional: if you're styling module cards

const rightsData = [
  { name: "Right to Equality", path: "/right-to-equality" },
  { name: "Right to Freedom", path: "/right-to-freedom" },
  { name: "Right Against Exploitation", path: "/right-against-exploitation" },
  { name: "Right to Freedom of Religion", path: "/right-to-freedom-of-religion" },
  { name: "Cultural and Educational Rights", path: "/cultural-and-educational-rights" },
  { name: "Right to Constitutional Remedies", path: "/right-to-constitutional-remedies" }
];

const RightsModule = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">🧑‍⚖️ Fundamental Rights</h2>

      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {rightsData.map((right, index) => (
          <Link key={index} to={right.path} className="module-card">
            {right.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RightsModule;
