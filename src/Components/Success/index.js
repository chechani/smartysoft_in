import React, { useState, useEffect } from 'react';
import './index.css';

const SuccessStoryList = ({ onStoryClick, stories }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (storyId) => {
    setHoveredCard(storyId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="success-story-list">
      <h2 className="section-title" style={{ paddingTop: '20px' }}>
        Success Stories
      </h2>
      <div className="row" style={{ marginTop: '50px', marginBottom: '70px' }}>
        {stories &&
          stories.map((story, index) => (
            <div
              className="col"
              key={index}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <div className={`card ${hoveredCard === index ? 'hovered' : ''}`}>
                <img
                  src={"https://smartysoftware.in/" + story.client_logo}
                  alt={story.client}
                  className="company-logo"
                />
                <h3 className="company-name">{story.client}</h3>
                <p className="tagline">{story.tagline || 'No tagline available'}</p>
                <p className="contact-person">Contact: {story.contact_person || 'Not specified'}</p>
                <p className="description">{story.description}</p>
                {hoveredCard === index && (
                  <div className="overlay">
                    <div className="overlay-content">
                      <p className="solution">Solution: {story.solutions || 'Not specified'}</p>
                      <p className="benefits">Benefits: {story.benefits || 'Not specified'}</p>
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
      <h2>{story.client} Case Study</h2>
      <p>Industry: {story.industry}</p>
      <p>Solution: {story.solutions}</p>
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
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://smartysoftware.in/api/method/professional.web.get_success_stories')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.message && data.message.success) {
          setStories(data.message.data);
        } else {
          setError('Invalid data format');
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseCaseStudy = () => {
    setSelectedStory(null);
  };

  return (
    <div className="container">
      {error ? (
        <div>Error: {error}</div>
      ) : selectedStory ? (
        <CaseStudy story={selectedStory} onClose={handleCloseCaseStudy} />
      ) : (
        <SuccessStoryList stories={stories} onStoryClick={handleStoryClick} />
      )}
    </div>
  );
};

export default SuccessStoryContainer;
