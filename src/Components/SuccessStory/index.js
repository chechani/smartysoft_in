import React, { useState } from 'react';

// Success Story data
const successStories = [
  {
    id: 1,
    icon: 'icon1.png',
    company: 'Company A',
    solution: 'Improved Sales',
    benefits: 'Increased revenue by 50%',
    caseStudy: 'case_study_1.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem libero. Integer auctor bibendum justo ac pretium.',
    industry: 'Healthcare',
    example: 'Streamlined patient management and billing processes using ERPNext.',
  },
  {
    id: 2,
    icon: 'icon2.png',
    company: 'Company B',
    solution: 'Enhanced Productivity',
    benefits: 'Reduced operational costs by 30%',
    caseStudy: 'case_study_2.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem libero. Integer auctor bibendum justo ac pretium.',
    industry: 'Real Estate',
    example: 'Managed property listings and streamlined sales processes using ERPNext.',
  },
  {
    id: 3,
    icon: 'icon3.png',
    company: 'Company C',
    solution: 'Improved Project Management',
    benefits: 'Increased project delivery efficiency by 40%',
    caseStudy: 'case_study_3.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem libero. Integer auctor bibendum justo ac pretium.',
    industry: 'Engineering',
    example: 'Optimized project planning and resource allocation using ERPNext.',
  },
  {
    id: 4,
    icon: 'icon4.png',
    company: 'Company D',
    solution: 'Streamlined Supply Chain',
    benefits: 'Reduced inventory holding costs by 25%',
    caseStudy: 'case_study_4.pdf',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem libero. Integer auctor bibendum justo ac pretium.',
    industry: 'Distribution',
    example: 'Managed inventory, orders, and logistics with ERPNext for efficient distribution operations.',
  },
];

const SuccessStoryList = ({ onStoryClick }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (storyId) => {
    setHoveredCard(storyId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="success-story-list">
      <style>
        {`
          .success-story-list {
            margin-top: 20px;
          }
          
          .card {
            position: relative;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            transition: all 0.3s ease;
          }
          
          .card.hovered {
            z-index: 1;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            
          }
          
          .company-logo {
            width: 50px;
            height: 50px;
            object-fit: contain;
          }
          
          .company-name {
            margin-top: 10px;
            font-size: 16px;
            font-weight: bold;
          }
          
          .description {
            margin-top: 10px;
          }
          
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 2;
          }
          
          .card.hovered .overlay {
            opacity: 1;
          }
          
          .overlay-content {
            text-align: center;
            color: #fff;
          }
          
          .solution,
          .benefits {
            margin-bottom: 10px;
          }
          
          .jump-to-case-study {
            background-color: #fff;
            color: #000;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }
          
          .jump-to-case-study:hover {
            background-color: #f5f5f5;
            
          }
        `}
      </style>
      <h2 className="section-title" style={{paddingTop:"20px"}}>Success Stories</h2>
      <div className="row" style={{marginTop:"50px",marginBottom:"70px"}}>
        {successStories.map((story) => (
          <div
            className="col"
            key={story.id}
            onMouseEnter={() => handleCardHover(story.id)}
            onMouseLeave={handleCardLeave}
          >
            <div className={`card ${hoveredCard === story.id ? 'hovered' : ''}`}>
              <img src={story.icon} alt={story.company} className="company-logo" />
              <h3 className="company-name">{story.company}</h3>
              <p className="description">{story.description}</p>
              {hoveredCard === story.id && (
                <div className="overlay">
                  <div className="overlay-content">
                    <p className="solution">Solution: {story.solution}</p>
                    <p className="benefits">Benefits: {story.benefits}</p>
                    <button className="jump-to-case-study" onClick={() => onStoryClick(story)}>
                      Jump to Case Study
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CaseStudy = ({ story, onClose }) => {
  return (
    <div>
      <h2>{story.company} Case Study</h2>
      <p>Industry: {story.industry}</p>
      <p>Solution: {story.solution}</p>
      <p>Benefits: {story.benefits}</p>
      <p>Description: {story.description}</p>
      <a href={story.caseStudy} target="_blank" rel="noopener noreferrer">
        Read Case Study
      </a>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const SuccessStoryContainer = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseCaseStudy = () => {
    setSelectedStory(null);
  };

  return (
    <div className="container">
      {selectedStory ? (
        <CaseStudy story={selectedStory} onClose={handleCloseCaseStudy} />
      ) : (
        <SuccessStoryList onStoryClick={handleStoryClick} />
      )}
    </div>
  );
};

export default SuccessStoryContainer;