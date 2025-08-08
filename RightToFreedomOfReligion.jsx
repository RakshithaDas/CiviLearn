import React from 'react';


const religionIssues = [
  {
    issue: "Restrictions on religious attire in schools or workplaces",
    whereToGo: "District Education Office or Human Rights Commission",
    whomToMeet: "Education Officer or Legal Aid Cell",
    howToSolve: "File a complaint citing Article 25 of the Constitution which guarantees freedom of religion and expression."
  },
  {
    issue: "Denial of access to places of worship based on caste",
    whereToGo: "Local Police Station or Social Welfare Department",
    whomToMeet: "SHO (Station House Officer), District Magistrate",
    howToSolve: "Register a complaint under Protection of Civil Rights Act, 1955."
  },
  {
    issue: "Religious conversion without consent or forceful conversion",
    whereToGo: "Local Police Station or District Court",
    whomToMeet: "Circle Inspector, Legal Advisor",
    howToSolve: "Report the matter and if required, file a FIR under relevant state anti-conversion laws."
  },
  {
    issue: "Discrimination in employment due to religious identity",
    whereToGo: "Equal Opportunity Commission (State) or Labor Commissioner",
    whomToMeet: "Labor Rights Officer or NGO",
    howToSolve: "File a written grievance; approach legal aid if denied justice."
  },
  {
    issue: "No holiday provision for minority religious festivals",
    whereToGo: "HR department or Local Education Board",
    whomToMeet: "Institution Head or Department Manager",
    howToSolve: "Submit a formal request under cultural accommodation policies."
  },
  {
    issue: "Restrictions on organizing peaceful religious events",
    whereToGo: "Municipal Corporation and Local Police",
    whomToMeet: "Event Permissions Officer, SHO",
    howToSolve: "Seek permission with written intent and submit to authorities in advance."
  },
  {
    issue: "Hate speech or violence based on religion",
    whereToGo: "Cyber Cell or Police Station",
    whomToMeet: "Cyber Crime Officer, DSP",
    howToSolve: "File FIR and preserve evidence like video, audio or social media screenshots."
  },
  {
    issue: "School textbooks containing religious biases",
    whereToGo: "District Education Office or NCERT Grievance Cell",
    whomToMeet: "Curriculum Committee or School Principal",
    howToSolve: "Submit a complaint along with textbook evidence for review."
  },
  {
    issue: "Refusal to rent houses based on religion",
    whereToGo: "Consumer Forum or Legal Aid Authority",
    whomToMeet: "Legal Aid Counsel or Housing Board",
    howToSolve: "File a discrimination complaint citing Articles 14 and 25."
  },
  {
    issue: "Caste-based seating in religious institutions",
    whereToGo: "SC/ST Welfare Board or Social Justice Department",
    whomToMeet: "Social Justice Officer",
    howToSolve: "Approach grievance redressal authority and social workers."
  },
  {
    issue: "Online abuse due to religious beliefs",
    whereToGo: "Cyber Crime Cell",
    whomToMeet: "Cyber Safety Officer",
    howToSolve: "Register complaint on cybercrime.gov.in with evidence."
  },
  {
    issue: "Denial of education due to religious practices (e.g., beard, turban)",
    whereToGo: "State Education Department",
    whomToMeet: "School Authority and Education Officer",
    howToSolve: "Appeal to State Board with legal support citing constitutional rights."
  },
  {
    issue: "Denial of health services due to religious background",
    whereToGo: "Hospital Management or Health Commissioner",
    whomToMeet: "Medical Superintendent",
    howToSolve: "Lodge complaint with health ombudsman or consumer protection forum."
  },
  {
    issue: "Interfaith marriages being denied or harassed",
    whereToGo: "District Magistrate Office or Family Court",
    whomToMeet: "Marriage Registrar or Legal Support NGO",
    howToSolve: "Apply for special marriage under Special Marriage Act, 1954."
  },
  {
    issue: "Restrictions on religious symbols at work (e.g., hijab, cross)",
    whereToGo: "HR Department or Labor Court",
    whomToMeet: "HR Manager, Trade Union Leader",
    howToSolve: "Submit grievance and approach labor rights commission if unresolved."
  }
];

export default function RightToFreedomOfReligion() {
  return (
    <div className="right-detail-container">
      <h1>🕌 Right to Freedom of Religion</h1>
      <p className="intro">
        The Right to Freedom of Religion ensures that every citizen has the freedom to profess, practice, and propagate their religion freely. Below are real-world issues people face and how they can resolve them:
      </p>
      {religionIssues.map((item, index) => (
        <div key={index} className="issue-card">
          <h3>🔹 Issue {index + 1}: {item.issue}</h3>
          <p><strong>📍 Where to go:</strong> {item.whereToGo}</p>
          <p><strong>👥 Whom to meet:</strong> {item.whomToMeet}</p>
          <p><strong>✅ How to solve:</strong> {item.howToSolve}</p>
        </div>
      ))}
    </div>
  );
}
