import React,{useState} from 'react'

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [companyNames, setCompanyNames] = useState([
    'Flipkart',
    'Amazon',
    'Google',
    'Apple',
    'media.not',
    // Add more company names here
  ]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // If the search query is empty, reset the company names to the original list
      setCompanyNames([
        'Flipkart',
        'Amazon',
        'Google',
        'Apple',
        'media.not',
        // Add more company names here
      ]);
    } else {
      // Filter company names based on the search query
      const filteredCompanies = companyNames.filter((name) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // Update the list of company names based on the search result
      setCompanyNames(filteredCompanies);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Find Your Dream Job</h1>
          <p>Join thousands of companies and job seekers who trust our platform.</p>
          <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Search for a job..."
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
       
      </div>
    
        </div>
      </section>
      <section className="job-categories">
    <div className="container">
      <h2>Job Categories</h2>
      <div className="categories-grid">
        <div className="category">
          <img src="src\assets\software-engineer.jpg" alt="Software Engineer" />
          <span>Software Engineers</span>
          
        </div>
        <div className="category">
          <img src="src\assets\product engineer.jpg" alt="Product Manager" />
          <span>Product Managers</span>
          
        </div>
        <div className="category">
          <img src="src\assets\data scientist.jpg" alt="Data Scientist" />
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