import React from 'react'

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
            {/* Add more features here */}
          </ul>
        </div>
        <div className="social-media">
          <h3>Join us on Social Media</h3>
          <div className="social-icons">
            {/* Add social media icons and links here */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\twitter.png" alt="Twitter" />
            </a>
            {/* Add more social media icons and links here */}
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer