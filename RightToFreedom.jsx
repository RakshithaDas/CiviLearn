import React from 'react';


export default function RightToFreedom() {
  const problems = [
    {
      problem: "Denied permission for peaceful protest",
      where: "Local Police Station",
      whom: "Station House Officer, District Magistrate",
      how: "Submit a written application for protest, follow legal protocol. Approach court if denied without valid reason."
    },
    {
      problem: "College restricts formation of student union",
      where: "University Grievance Cell",
      whom: "Principal, Vice-Chancellor",
      how: "Submit petition; escalate to UGC or file RTI if freedom to organize is denied."
    },
    {
      problem: "Employee terminated for expressing political opinion online",
      where: "Labour Court, Human Rights Commission",
      whom: "Labour Commissioner, Legal Aid Cell",
      how: "File a case under Article 19 (freedom of speech), seek help from a legal advocate."
    },
    {
      problem: "Blog post censored by service provider without valid reason",
      where: "Cyber Crime Cell, TRAI",
      whom: "Cyber Officer, Legal Counsel",
      how: "File complaint under IT Act, demand explanation from service provider."
    },
    {
      problem: "Community denied access to conduct cultural festival",
      where: "Municipality Office, District Collector",
      whom: "Civic Authority, Cultural Board",
      how: "Apply for event license; appeal if unreasonably denied citing Article 19(1)(a)."
    },
    {
      problem: "Press not allowed to cover an incident",
      where: "Press Council of India",
      whom: "Editor, District Information Officer",
      how: "Raise the issue with PCI; legal recourse under Freedom of Press."
    },
    {
      problem: "Worker forced to join trade union against will",
      where: "Labour Commissioner Office",
      whom: "Union Head, Labour Inspector",
      how: "Submit written complaint; invoke right to not associate under Article 19(1)(c)."
    },
    {
      problem: "Online activism account suspended without warning",
      where: "Social Media Grievance Portal, IT Ministry",
      whom: "Platform Grievance Officer",
      how: "Request reinstatement, escalate to IT Grievance Appellate Committee."
    },
    {
      problem: "Preacher stopped from delivering religious sermon",
      where: "Police Station, Religious Affairs Board",
      whom: "Sub-Inspector, Local Magistrate",
      how: "Ensure sermon content is peaceful; file PIL if blocked arbitrarily."
    },
    {
      problem: "Not allowed to wear cultural attire at workplace",
      where: "HR Department, Labour Department",
      whom: "HR Officer, Labour Inspector",
      how: "Raise grievance; file complaint for cultural suppression."
    },
    {
      problem: "Denied access to temple for performing ritual",
      where: "Temple Trust Board",
      whom: "Trust Manager, Legal Advisor",
      how: "Appeal to trust, if needed file complaint under Religious Freedom clause."
    },
    {
      problem: "Independent artist denied public performance permission",
      where: "Civic Body, Local Licensing Authority",
      whom: "Cultural Officer, Local MLA",
      how: "Submit application, ask for justification if denied."
    },
    {
      problem: "Arrested for speaking against public authority on social media",
      where: "State Legal Services Authority",
      whom: "Cyber Police, Advocate",
      how: "Seek bail and protection under Article 19. File writ petition if needed."
    },
    {
      problem: "Restricted access to public ground for peaceful gathering",
      where: "Municipal Corporation",
      whom: "Town Planner, Municipal Commissioner",
      how: "File a complaint; seek written reasoning for refusal. Escalate to court."
    },
    {
      problem: "School bans a religious thread/bracelet citing dress code",
      where: "School Board, Child Rights Commission",
      whom: "Principal, School Ombudsman",
      how: "Raise a written grievance citing freedom of religion; contact child rights NGO if needed."
    },
  ];

  return (
    <div className="right-container">
      <h1 className="right-title">🕊️ Right to Freedom</h1>
      <p className="right-description">
        The Right to Freedom guarantees freedom of speech, expression, assembly, association, movement, residence, and profession to every citizen of India.
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
