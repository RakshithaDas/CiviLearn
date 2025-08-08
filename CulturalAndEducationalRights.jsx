import React from 'react';

const culturalEducationIssues = [
  {
    issue: "Denial of admission based on mother tongue or regional background.",
    whereToGo: "District Education Officer or State Minority Commission.",
    whomToMeet: "School Principal, Education Board Authority.",
    howToSolve: "File a complaint with documents proving discriminatory rejection, quoting Article 29 and 30."
  },
  {
    issue: "No availability of regional language textbooks in school.",
    whereToGo: "State Education Department or SCERT.",
    whomToMeet: "District Education Officer or Language Board.",
    howToSolve: "Write a petition with student/parent signatures requesting regional language resources."
  },
  {
    issue: "Denial to celebrate cultural festivals in school/college.",
    whereToGo: "Cultural Cell of the institution or District Collector.",
    whomToMeet: "Principal, Student Council, Cultural Officer.",
    howToSolve: "Formally request permission and approach education authorities if denied."
  },
  {
    issue: "Biased curriculum ignoring regional or tribal cultures.",
    whereToGo: "Education Board and NCERT Review Panel.",
    whomToMeet: "Curriculum Developers, Cultural Ministry Officials.",
    howToSolve: "Submit a representation demanding inclusive content reflecting all cultures."
  },
  {
    issue: "Rejection of applications to open minority educational institutions.",
    whereToGo: "Minority Affairs Department or Education Tribunal.",
    whomToMeet: "Registrar of Societies, Educational Licensing Officer.",
    howToSolve: "Present legal documents ensuring institution's cultural basis and seek minority status protection under Article 30."
  },
  {
    issue: "Restrictions on wearing traditional attire in institutions.",
    whereToGo: "Institutional Grievance Cell or Minority Commission.",
    whomToMeet: "Principal, Dress Code Committee.",
    howToSolve: "File a representation quoting cultural rights under the Constitution."
  },
  {
    issue: "No inclusion of local tribal languages in primary education.",
    whereToGo: "Sarva Shiksha Abhiyan Office or Tribal Ministry.",
    whomToMeet: "District Education Officer, Tribal Language Cell.",
    howToSolve: "Submit a memorandum requesting tribal language inclusion, backed by community leaders."
  },
  {
    issue: "Cultural clubs banned or underfunded in schools.",
    whereToGo: "Education Department's Cultural Division.",
    whomToMeet: "School Admin, Local Education Authority.",
    howToSolve: "Form a student-parent body and request fund allocation under cultural programs."
  },
  {
    issue: "Cultural symbols or emblems being removed from public spaces.",
    whereToGo: "Municipal Corporation or Cultural Department.",
    whomToMeet: "Ward Officer, Cultural Heritage Committee.",
    howToSolve: "File a petition to restore symbols citing heritage protection laws."
  },
  {
    issue: "Misinformation or stereotyping in textbooks about cultures.",
    whereToGo: "Education Textbook Review Board.",
    whomToMeet: "NCERT/SCERT Officials, Cultural Experts.",
    howToSolve: "Submit factual corrections along with cultural community support letters."
  },
  {
    issue: "Language suppression in local administrative processes.",
    whereToGo: "State Language Commission.",
    whomToMeet: "Tehsildar, Local MLA, or Panchayat Head.",
    howToSolve: "Draft a public representation or RTI asking for equal language status enforcement."
  },
  {
    issue: "Suppression of folk art or traditions in modern education.",
    whereToGo: "Art and Culture Academy or State Cultural Ministry.",
    whomToMeet: "School Curriculum Board or NGO Promoting Folk Culture.",
    howToSolve: "Organize awareness events and request curriculum integration."
  },
  {
    issue: "Disparity in funds between cultural groups for school programs.",
    whereToGo: "District Education Finance Office.",
    whomToMeet: "Principal, Accounts Department.",
    howToSolve: "Request audit and equitable distribution as per Article 29 protections."
  },
  {
    issue: "Restrictions on traditional food in hostel/mess.",
    whereToGo: "Student Grievance Redressal Cell.",
    whomToMeet: "Warden, Mess Committee, Hostel Superintendent.",
    howToSolve: "Present dietary needs backed with cultural relevance and legal support."
  },
  {
    issue: "Banning community language usage in classrooms.",
    whereToGo: "School Management or Minority Commission.",
    whomToMeet: "Teacher, Principal, Education Officer.",
    howToSolve: "Discuss the violation of linguistic rights, involve parents' association if needed."
  }
];

export default function CulturalAndEducationalRights() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
        🏛️ Cultural and Educational Rights
      </h1>
      <p className="text-center text-gray-700 mb-8">
        Safeguarding the rights of minorities to preserve their language, script, and culture, while ensuring they can establish and administer educational institutions of their choice.
      </p>
      <div className="space-y-6">
        {culturalEducationIssues.map((item, index) => (
          <div key={index} className="bg-purple-50 border border-purple-200 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-purple-800">📝 Problem: {item.issue}</h2>
            <p><strong>📍 Where to go:</strong> {item.whereToGo}</p>
            <p><strong>👥 Whom to meet:</strong> {item.whomToMeet}</p>
            <p><strong>🛠️ How to solve:</strong> {item.howToSolve}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
