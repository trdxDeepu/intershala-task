import React, { useState } from 'react';
import FlipkartImage from '../assets/flipkart.jpg'
import AmazonImage from '../assets/amazon.png'
import GoogleImage from '../assets/google.png'
import TwitterImage from '../assets/twitter.png'
import SoftwareEngineerImage from '../assets/software-engineer.jpg'
import ProductEngineerImage from '../assets/product engineer.jpg'
import  DataScientistImage from '../assets/data scientist.jpg';


const HeroSection = () => {
  const companyData = [
    {
      name: 'Flipkart',
      description: 'E-commerce company',
      jobOpenings: ['Software Engineer', 'Product Manager'],
      imageUrl: FlipkartImage,
    },
    {
      name: 'Amazon',
      description: 'E-commerce and cloud computing company',
      jobOpenings: ['Software Engineer', 'Data Scientist'],
      imageUrl: AmazonImage,
    },
    {
      name: 'Google',
      description: ' Cloud computing and Search Analytic',
      jobOpenings: ['Software Engineer', 'Data Scientist'],
      imageUrl: GoogleImage,
    },
    {
      name: 'Twitter',
      description: 'Social media Platform',
      jobOpenings: ['Software Engineer', 'Data Scientist'],
      imageUrl:TwitterImage,
    },
    // Add more company data objects here
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Find Your Dream Job</h1>
          <p>Join thousands of companies and job seekers who trust our platform.</p>
          <div className="company-list">
            {companyData.map((company, index) => (
              <div key={index} onClick={() => handleCompanyClick(company)}>
                <div className="company-item">
                  <img src={company.imageUrl} alt={company.name} />
                  <span>{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCompany && (
       <section className="company-details">
       <div className="container">
         <div className="company-info">
           <h2>{selectedCompany.name}</h2>
           <p>{selectedCompany.description}</p>
           <h3>Job Openings:</h3>
           <ul>
             {selectedCompany.jobOpenings.map((job, index) => (
               <li key={index}>{job}</li>
             ))}
           </ul>
         </div>
         <div className="company-image">
           <img src={selectedCompany.imageUrl} alt={selectedCompany.name} />
         </div>
       </div>
     </section>
     
      )}

      <section className="job-categories">
    <div className="container">
      <h2>Job Categories</h2>
      <div className="categories-grid">
        <div className="category">
          <img src={SoftwareEngineerImage} alt="Software Engineer" />
          <span>Software Engineers</span>
          
        </div>
        <div className="category">
          <img src={ProductEngineerImage} alt="Product Manager" />
          <span>Product Managers</span>
          
        </div>
        <div className="category">
          <img src={DataScientistImage } alt="Data Scientist" />
          <span>Data Scientists</span>
         
        </div>
        {/* Add more job categories here */}
      </div>
    </div>
  </section>
    </>
    

  )
}

export default HeroSection