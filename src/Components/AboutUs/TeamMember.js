import React, { useEffect, useState } from 'react';
import './TeamMember.css';

const TeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://smartysoftware.in/api/method/professional.web.get_team');
        const data = await response.json();
        const teamMembersData = data.message || []; // Set an empty array as the default value if team members data is undefined
        setTeamMembers(teamMembersData);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div>
      <h1 className="section-title">Team Members</h1>
      {teamMembers.length > 0 ? (
        <div className="team-members-container">
          {teamMembers.map((member) => (
            <div key={member.member_name} className="team-member-card">
              <div className="member-image">
                <img
                  src={"https://smartysoftware.in/" + member.photo}
                  alt={member.member_name}
                />
              </div>
              <div className="member-details">
                <h3>{member.member_name}</h3>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No team members found.</p>
      )}
    </div>
  );
};

export default TeamMember;
