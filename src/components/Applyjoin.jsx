import React, { useState } from 'react';
import JoinModal from '../Modal/JoinModal';

const Applyjoin = () => {
  const [showModal, setShowModal] = useState(false);

  const handleApplyToJoin = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="centered">
        <button className="apply-to-join-button" onClick={handleApplyToJoin}>
          Apply to Join
        </button>
      </div>
      <section className="join-steps">
        <div className="container">
          <h2>How to Join ?</h2>
          <div className="steps-grid">
            <div className="step">
              <img src="src\assets\form.png" alt="Step 1" />
              <p>Click "Apply to Join" to start the application process.</p>
            </div>
            <div className="step">
              <img src="src\assets\form2.png" alt="Step 2" />
              <p>Fill in your details and submit your application.</p>
            </div>
            <div className="step">
              <img src="src\assets\job offer.png" alt="Step 3" />
              <p>Accept the job offer and join our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {showModal && <JoinModal onClose={closeModal} />}
      {/* Render the JoinModal component when showModal is true */}
    </>
  );
};

export default Applyjoin;
