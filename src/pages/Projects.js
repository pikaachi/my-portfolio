import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { FaFolder, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const API_URL = "http://localhost:1337";
  useEffect(() => {
    fetch("http://localhost:1337/api/projects?populate=*")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Projects:", JSON.stringify(data, null, 2)); // Debugging log
        if (data?.data) {
          setProjects(data.data);
        } else {
          setProjects([]); // Prevents errors if data is missing
        }
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">/ projects</h2>
      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>No projects found</p>
        ) : (
          projects.map((project, index) => {
            console.log("Rendering Project:", project); // Debugging log per project
            
            // Extract description text from the array
            const descriptionArray = project?.description || [];
            const descriptionText = descriptionArray
              .map((desc) => desc?.children?.map((child) => child.text).join(" "))
              .join("\n")
              .trim();

            return (
              <div key={index} className="project-card">
                <div className="project-header">
                  <FaFolder className="folder-icon" />
                  <a 
                    href={project?.link || "#"} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="github-icon" />
                  </a>
                </div>
                <h1 className="project-title">{project?.title || "Untitled Project"}</h1>
                <p className="project-description">
                  {descriptionText || "No description available."}
                </p>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Projects;
