import React from 'react';


export default function RightToEquality() {
  const problems = [
    {
      problem: "Discrimination in college admission based on caste",
      where: "College Admission Office, Education Department",
      whom: "Admission Officer, Regional Education Officer",
      how: "Submit grievance form with proof; escalate to RTI or National Commission for SC/ST"
    },
    {
      problem: "Job denied due to religion",
      where: "Labour Commissioner’s Office",
      whom: "Labour Officer, Human Rights Commission",
      how: "File a written complaint with evidence of denial"
    },
    {
      problem: "Unequal pay for the same work",
      where: "Labour Department, Women's Commission",
      whom: "Labour Inspector, NGO for Women’s Rights",
      how: "File under Equal Remuneration Act with salary slips"
    },
    {
      problem: "Girls not allowed to play sports in school",
      where: "School Management, District Education Office",
      whom: "Principal, Education Officer",
      how: "File formal complaint and raise issue with child rights NGO"
    },
    {
      problem: "Temple not allowing entry to lower caste individuals",
      where: "District Magistrate Office, Minority Affairs",
      whom: "Local Magistrate, Social Justice Board",
      how: "File complaint; escalate to Human Rights Commission"
    },
    {
      problem: "Landlord refusing tenants based on religion",
      where: "State Human Rights Commission",
      whom: "Housing Board Authority, Legal Cell",
      how: "Submit complaint with evidence (audio or messages)"
    },
    {
      problem: "Discrimination in classroom participation",
      where: "School Administration, Education Ministry Portal",
      whom: "Class Teacher, School Counselor",
      how: "Raise concern to PTA; submit online grievance"
    },
    {
      problem: "Separate seating in canteen for certain caste groups",
      where: "School/College Admin, Social Welfare Dept",
      whom: "Disciplinary Committee, Social Justice Officer",
      how: "Raise with institution and register a complaint"
    },
    {
      problem: "Bias in government exam evaluation",
      where: "Public Service Commission",
      whom: "Grievance Redressal Officer",
      how: "Apply for re-evaluation and lodge RTI request"
    },
    {
      problem: "Police harassment based on appearance or community",
      where: "Police Complaints Authority, NHRC",
      whom: "ACP, Commissioner",
      how: "File FIR or complaint with NHRC portal"
    },
    {
      problem: "Women denied entry into religious places",
      where: "Religious Trust Board, Women’s Commission",
      whom: "Temple Authority, Social Activists",
      how: "File PIL or complaint to Women's Rights NGO"
    },
    {
      problem: "Transgender person denied service in a shop",
      where: "Consumer Forum, LGBTQ+ Welfare Cell",
      whom: "Consumer Rights Officer",
      how: "Submit written complaint with CCTV/recordings"
    },
    {
      problem: "Hostel denying admission to students from Northeast India",
      where: "University Grievance Cell, UGC",
      whom: "Dean of Students, Anti-Discrimination Officer",
      how: "File official complaint with UGC grievance portal"
    },
    {
      problem: "Mockery and bullying due to religion or surname",
      where: "School Counselor, Cyber Cell (if online)",
      whom: "Class Teacher, Cyber Police",
      how: "Report bullying and file complaint under Anti-Ragging Act"
    },
    {
      problem: "Marriage registrar denying service to interfaith couple",
      where: "Sub-Registrar Office",
      whom: "Marriage Officer, District Magistrate",
      how: "Raise legal complaint and file under Special Marriage Act"
    }
  ];

  return (
    <div className="right-container">
      <h1 className="right-title">⚖️ Right to Equality</h1>
      <p className="right-description">
        The Right to Equality ensures that every citizen is treated equally before the law,
        and there is no discrimination based on religion, race, caste, sex, or place of birth.
      </p>

      <div className="problems-grid">
        {problems.map((item, index) => (
          <div key={index} className="problem-card">
            <h3 className="problem-title">📌 {item.problem}</h3>
            <p><strong>📍 Where to go:</strong> {item.where}</p>
            <p><strong>👥 Whom to meet:</strong> {item.whom}</p>
            <p><strong>🛠️ How to solve:</strong> {item.how}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
