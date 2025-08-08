// src/pages/RightToEducation.jsx
import React from 'react';


const educationIssues = [
  {
    problem: "Child denied admission due to lack of birth certificate",
    whereToGo: "Block Education Office (BEO)",
    whomToMeet: "Block Education Officer",
    howToSolve: "Submit an affidavit or alternative documents. RTE allows for relaxed documentation."
  },
  {
    problem: "Excessive school fees charged despite RTE eligibility",
    whereToGo: "District Education Officer (DEO)",
    whomToMeet: "Fee Regulation Committee",
    howToSolve: "File a complaint with the DEO and submit income certificate to claim exemption."
  },
  {
    problem: "Private school refusing RTE admission quota",
    whereToGo: "Education Department Office",
    whomToMeet: "RTE Nodal Officer",
    howToSolve: "Submit a written complaint along with application receipt and school denial."
  },
  {
    problem: "Government school lacks basic infrastructure (toilets, classrooms)",
    whereToGo: "Panchayat Office or Municipal Corporation",
    whomToMeet: "School Development Monitoring Committee",
    howToSolve: "Raise a grievance to the SDMC or file a complaint via the SSA portal."
  },
  {
    problem: "Teacher shortage in rural school",
    whereToGo: "District Education Department",
    whomToMeet: "District Education Officer",
    howToSolve: "Submit a letter signed by parents to DEO for immediate teacher deputation."
  },
  {
    problem: "Student forced to pay for uniforms and books in RTE school",
    whereToGo: "School Management Committee",
    whomToMeet: "Principal & RTE Compliance Officer",
    howToSolve: "RTE mandates free essentials; raise it in SMC or complain to Block Office."
  },
  {
    problem: "Disabled child not accommodated in school",
    whereToGo: "Inclusive Education Coordinator",
    whomToMeet: "District SSA Coordinator",
    howToSolve: "Refer to RTE + RPWD Act and demand accessible learning provisions."
  },
  {
    problem: "Midday meals of poor quality or irregular",
    whereToGo: "Education Department or SDMC",
    whomToMeet: "Midday Meal In-Charge",
    howToSolve: "Report with pictures to DEO or submit grievance online via MDM portal."
  },
  {
    problem: "Female students drop out due to lack of toilets",
    whereToGo: "Panchayat or Urban Development Body",
    whomToMeet: "Swachh Bharat Officer / Principal",
    howToSolve: "Petition via SMC to fund toilets under SSA or SBM."
  },
  {
    problem: "No transportation for children in hilly/rural areas",
    whereToGo: "District Education Office",
    whomToMeet: "Transport Coordinator under SSA",
    howToSolve: "File a request for transportation under the RTE Transport Grant."
  },
  {
    problem: "Parents unaware of RTE admission dates",
    whereToGo: "Gram Panchayat / Anganwadi",
    whomToMeet: "RTE Helpline Volunteer / Panchayat Secretary",
    howToSolve: "Spread awareness via posters, local WhatsApp groups, or request awareness drives."
  },
  {
    problem: "RTE seats not filled due to lack of applications",
    whereToGo: "School and Education Department",
    whomToMeet: "Admission Committee",
    howToSolve: "Ask local officials to extend deadlines and simplify application processes."
  },
  {
    problem: "Girl child discouraged from higher education",
    whereToGo: "District Gender Cell or Women Commission",
    whomToMeet: "Counselor or Gender Nodal Officer",
    howToSolve: "File a complaint and seek scholarship and awareness support."
  },
  {
    problem: "Language barrier for migrant students",
    whereToGo: "Inclusive Education Wing, SSA",
    whomToMeet: "Bridge Course Coordinator",
    howToSolve: "Demand for bridge classes and appoint bilingual educators."
  },
  {
    problem: "Child forced to work instead of attend school",
    whereToGo: "Childline 1098 / Labor Department",
    whomToMeet: "Child Welfare Committee",
    howToSolve: "Report immediately; child must be rehabilitated and enrolled in school."
  },
];

export default function RightToEducation() {
  return (
    <div className="right-container">
      <h1 className="right-heading">📚 Right to Education – Real-World Problems & Solutions</h1>
      {educationIssues.map((item, index) => (
        <div key={index} className="right-card">
          <h2 className="problem-title">🔴 Problem {index + 1}:</h2>
          <p><strong>{item.problem}</strong></p>
          <p><span className="label">📍 Where to go:</span> {item.whereToGo}</p>
          <p><span className="label">👥 Whom to meet:</span> {item.whomToMeet}</p>
          <p><span className="label">🛠️ How to solve:</span> {item.howToSolve}</p>
        </div>
      ))}
    </div>
  );
}
