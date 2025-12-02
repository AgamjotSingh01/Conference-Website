'use client';
import React from "react";
import Link from "next/link";
import "../Event/page.css";

const Event = () => {
  return (
    <div className="event-page">

      {/* ==== POSTER + ABOUT ==== */}
      <section className="poster-about-section fade-in">
        <div className="poster-left">
          <img src="/assets/event poster.png" alt="Poster" className="poster-side-image" />
        </div>

        <div className="about-right slide-up">
          <h2 className="about-title">About the Competition</h2>
          <p className="about-text">
            The AI-Driven Sustainability Research Poster Presentation Competition invites UG and PG students 
            to showcase innovative ideas where artificial intelligence contributes to a greener and more sustainable world. 
            Participants must present original research or conceptual work aligned with the theme 
            <strong> “AI-Driven Sustainability.”</strong>
          </p>

          <p className="about-text">
            Sub-themes include AI for climate change, renewable energy, sustainable agriculture, waste management, 
            smart cities, biodiversity conservation, and other sustainability-focused applications of AI.  
            The competition aims to promote creativity, research thinking, and impactful ideas for the future.
          </p>
           <Link href="https://forms.gle/3GfTgFbFtsPSvNjJ9" className="register-link">Register now..!</Link>
        </div>
      </section>

      {/* ==== EVENT INFORMATION (HORIZONTAL CARDS) ==== */}
      <h2 className="section-heading">Event Information</h2>
      <section className="section container fade-in">
        <div className="info-container-horizontal">

          <div className="info-card slide-up">
            <h4>Eligibility</h4>
            <p>
              Open to all UG & PG students from any department.  
              Individual participation only.
            </p>
          </div>

          <div className="info-card slide-up">
            <h4>Registration Fee</h4>
            <p>
              ₹100 per participant.  
              Fee is non-refundable.  
              Registration is confirmed only after form submission & payment proof upload.
            </p>
          </div>

          <div className="info-card slide-up">
            <h4>Submission Details</h4>
            <p>
              Deadline: <strong>19th December</strong><br />
              Poster must be in <strong>PNG format</strong> and <strong>A3 size</strong> (297 × 420 mm).  
              File name format: <em>ParticipantName_Title</em>
            </p>
          </div>

        </div>
      </section>

      {/* ==== RULES SECTION ==== */}
      <h2 className="section-heading1">Event Rules</h2>
      <section className="section container fade-in">
        <div className="rules-box">
          <ul className="rules-list">

            <li className="rule-item">Posters must strictly follow the theme “AI-Driven Sustainability.”</li>
            <li className="rule-item">Only PNG files in A3 size are accepted.</li>
            <li className="rule-item">Digital or hand-made posters allowed (final submission must be PNG).</li>
            <li className="rule-item">Poster must be original work; false or misleading information is prohibited.</li>
            <li className="rule-item">Participants must maintain professionalism and follow all instructions.</li>
            <li className="rule-item">Late submissions or incomplete payments will lead to disqualification.</li>
            <li className="rule-item">Judges’ decisions will be final.</li>

          </ul>
        </div>
      </section>

      {/* ==== PRESENTATION ROUND ==== */}
      <h2 className="section-heading1">Presentation Round</h2>
      <section className="section container fade-in">
        <div className="rules-box">
          <ul className="rules-list">
            <li className="rule-item">Each participant must present their poster.</li>
            <li className="rule-item">Presentation time: 5–7 minutes.</li>
            <li className="rule-item">Followed by 2–3 minutes Q&A.</li>
            <li className="rule-item">Only the registered participant may present.</li>
          </ul>
        </div>
      </section>

      {/* ==== EVALUATION CRITERIA ==== */}
      <h2 className="section-heading1">Evaluation Criteria</h2>
      <section className="section container fade-in">
        <div className="rules-box">
          <ul className="rules-list">
            <li className="rule-item">Theme relevance</li>
            <li className="rule-item">Creativity & innovation</li>
            <li className="rule-item">Research quality</li>
            <li className="rule-item">Clarity of problem statement</li>
            <li className="rule-item">Impact & practicality</li>
            <li className="rule-item">Visual appeal & organization</li>
            <li className="rule-item">Overall communication of idea</li>
          </ul>
        </div>
      </section>
      
      {/* ==== FOOTER ==== */}
      <footer className="footer">
        © 2025 • AI-Driven Sustainability Poster Competition
      </footer>

    </div>
  );
};

export default Event;
