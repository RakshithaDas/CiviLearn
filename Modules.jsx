import React from "react";
import { Link } from "react-router-dom";
import "./Modules.css"; // Optional: keep it if you're adding styles

const Modules = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">🧾 Fundamental Rights Modules</h2>
      
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <Link to="/right-to-equality" className="module-card">
          Right to Equality
        </Link>
        <Link to="/right-to-freedom" className="module-card">
          Right to Freedom
        </Link>
        <Link to="/right-against-exploitation" className="module-card">
          Right Against Exploitation
        </Link>
        <Link to="/right-to-freedom-of-religion" className="module-card">
          Right to Freedom of Religion
        </Link>
        <Link to="/cultural-and-educational-rights" className="module-card">
          Cultural and Educational Rights
        </Link>
        <Link to="/right-to-constitutional-remedies" className="module-card">
          Right to Constitutional Remedies
        </Link>
      </div>
    </div>
  );
};

export default Modules;
