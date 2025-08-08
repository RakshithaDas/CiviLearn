import React, { useEffect, useState } from 'react';

export default function Alerts() {
  const [civicAlerts, setCivicAlerts] = useState([]);
  const [electionNews, setElectionNews] = useState(null);

  useEffect(() => {
    fetch('/data/alerts.json')
      .then(res => res.json())
      .then(data => {
        setCivicAlerts(data.civicAlerts);
        setElectionNews(data.electionNews);
      })
      .catch(err => console.error('Failed to load alerts:', err));
  }, []);

  return (
    <div className="p-6 space-y-10">
      {/* Civic Alerts Section */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">📢 Civic Alerts</h2>
        {civicAlerts.length === 0 ? (
          <p>No civic alerts at the moment.</p>
        ) : (
          civicAlerts.map(alert => (
            <div
              key={alert.id}
              className="mb-4 p-4 border border-blue-300 rounded-lg bg-white shadow"
            >
              <h3 className="text-lg font-semibold text-red-700">{alert.title}</h3>
              <p>{alert.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                Type: {alert.type} | Date: {alert.date}
              </p>
            </div>
          ))
        )}
      </section>

      {/* Election News Section */}
      {electionNews && (
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-4">🗳️ Upcoming Elections</h2>
          <div className="p-4 border border-green-300 rounded-lg bg-white shadow">
            <h3 className="text-xl font-semibold text-green-800">{electionNews.title}</h3>
            <p className="text-md mb-2 text-gray-700">{electionNews.summary}</p>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li><strong>Election Date:</strong> {electionNews.date}</li>
              <li><strong>Voter Registration Deadline:</strong> {electionNews.voterInfo.registrationDeadline}</li>
              <li>
                <strong>Check Voter ID:</strong>{' '}
                <a href={electionNews.voterInfo.voterIdLink} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  voterportal.eci.gov.in
                </a>
              </li>
              <li><strong>Voter Helpline:</strong> {electionNews.voterInfo.helpline}</li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
