import React from 'react'
import FacebookImage from '../assets/facebook.png'
import TwitterImage from '../assets/twitter.png'

const Footer = () => {
  return (
    
    <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Advanced Job Search</li>
            <li>Company Profile Pages</li>
            <li>Resume Builder</li>
            <li>Job Alerts</li>
          
          </ul>
        </div>
        <div className="social-media">
          <h3>Join us on Social Media</h3>
          <div className="social-icons">
            
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookImage} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterImage} alt="Twitter" />
            </a>
        
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer