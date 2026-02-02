import React, { useState, useEffect } from "react";
import "../styles/Experience.css";

// Mock data for local testing (used if API is unavailable)
const MOCK_EXPERIENCES = [
  {
    id: "mock-1",
    company: "General Motors",
    title: "Software Engineer",
    start_date: "2022-01-01",
    end_date: "2024-01-01",
    description_text:
      "Designed and maintained backend services to support defect workflows\n" +
      "Improved data reliability by resolving duplicate records and timestamp edge cases\n" +
      "Built KPI views and dashboards for operational visibility",
  },
];

const API_URL = process.env.REACT_APP_API_URL;

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [usingMock, setUsingMock] = useState(false);

  useEffect(() => {
    const setLocalMockData = () => {
      setExperiences(MOCK_EXPERIENCES);
      setUsingMock(true);
    };

    // If no API_URL, immediately fall back to mock data
    if (!API_URL) {
      console.warn("REACT_APP_API_URL is not set. Using local mock experience data.");
      setLocalMockData();
      return;
    }

    console.log("Fetching experience from:", API_URL);

    fetch(`${API_URL}/experience?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Experience:", JSON.stringify(data, null, 2));
        if (data?.data?.length) {
          setExperiences(data.data);
          setUsingMock(false);
        } else {
          console.warn("No experience data returned from API. Using local mock data.");
          setLocalMockData();
        }
      })
      .catch((error) => {
        console.error("Error fetching experience:", error);
        console.warn("Falling back to local mock experience data.");
        setLocalMockData();
      });
  }, []);

  // Helper: turn either Strapi rich-text-ish array OR mock text into bullet lines
  const getDescriptionLines = (exp) => {
    // Mock path: plain text with newlines
    if (typeof exp?.description_text === "string") {
      return exp.description_text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
    }

    // Strapi rich text-ish path: array with children -> text
    const descriptionArray = exp?.description || [];
    const joined = descriptionArray
      .map((desc) => desc?.children?.map((child) => child.text).join("") || "")
      .join("\n")
      .trim();

    return joined
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
  };

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">/ experience</h2>

      {usingMock && (
        <p style={{ fontSize: 12, opacity: 0.8 }}>
          Using local mock data (set REACT_APP_API_URL to load Strapi data).
        </p>
      )}

      <div className="timeline">
        {experiences.length === 0 ? (
          <p>No experience data available</p>
        ) : (
          experiences.map((exp, index) => {
            const startYear = exp.start_date ? new Date(exp.start_date).getFullYear() : "Unknown";
            const endYear = exp.end_date ? new Date(exp.end_date).getFullYear() : "Present";

            const descriptionLines = getDescriptionLines(exp);

            return (
              <div key={exp.id ?? index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="company">{exp.company || "Unknown Company"}</h3>
                  <h4 className="position">{exp.title || "Unknown Position"}</h4>
                  <p className="duration">
                    {startYear} - {endYear}
                  </p>

                  {descriptionLines.length > 0 ? (
                    <ul className="description">
                      {descriptionLines.map((line, i) => (
                        <li key={i}>{line}</li>
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
