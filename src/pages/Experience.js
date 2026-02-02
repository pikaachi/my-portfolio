import React, { useState, useEffect } from "react";
import "../styles/Experience.css";

const API_URL = process.env.REACT_APP_API_URL;

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  console.log("Fetching experience from:", API_URL); // Debugging log
  useEffect(() => {
    //fetch(`http://localhost:1337/api/experience?populate=*`)
    fetch(`${API_URL}/experience?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Experience:", JSON.stringify(data, null, 2)); // Debugging log
        if (data?.data) {
          setExperiences(data.data);
        } else {
          setExperiences([]);
        }
      })
      .catch((error) => console.error("Error fetching experience:", error));
  }, []);

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">/ experience</h2>
      <div className="timeline">
        {experiences.length === 0 ? (
          <p>No experience data available</p>
        ) : (
          experiences.map((exp, index) => {
            console.log("Rendering Experience:", exp);

            // Extract Year from the Date
            const startYear = exp.start_date ? new Date(exp.start_date).getFullYear() : "Unknown";
            const endYear = exp.end_date ? new Date(exp.end_date).getFullYear() : "Present";

            // Extract description text from the array
            const descriptionArray = exp?.description || [];
            const descriptionText = descriptionArray
              .map((desc) => desc?.children?.map((child) => child.text).join(" "))
              .join("\n")
              .split("\n")
              .trim();

            return (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="company">{exp.company || "Unknown Company"}</h3>
                  <h4 className="position">{exp.title || "Unknown Position"}</h4>
                  <p className="duration">
                    {startYear} - {endYear}
                  </p>
                  {descriptionText.length > 0 ? (
                    <ul className= "description">
                      {descriptionText.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                  <p className="description">No description available.</p>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Experience;
