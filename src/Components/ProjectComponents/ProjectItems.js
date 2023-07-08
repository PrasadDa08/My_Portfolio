import React, { useState } from "react";

function ProjectItems({ projects }) {
  const [currenIndex, setCurrentIndex] = useState(0);

  const goToRight = () => {
    const isLastProject = currenIndex === projects.length - 1;
    const newIndex = isLastProject ? 0 : currenIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToleft = () => {
    const isFirstProject = currenIndex === 0;
    const newIndex = isFirstProject ? projects.length - 1 : currenIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToProject = (projectIndex) => {
    setCurrentIndex(projectIndex);
  };

  return (
    <div className="Projects">
      <div className="project-container">
        {/* Left-Right Buttons */}
        <div className="left-btn" onClick={goToleft}>
          ◀︎{" "}
        </div>
        <div className="right-btn" onClick={goToRight}>
          {" "}
          ►{" "}
        </div>

        {/* Projects Images */}
        <div className="image-container">
          <img
            src={
              projects[
                currenIndex === 0 ? projects.length - 1 : currenIndex - 1
              ].img
            }
            className="previous-img"
          />
          <img src={projects[currenIndex].img} className="main-img" />
          <img
            src={
              projects[
                currenIndex === projects.length - 1 ? 0 : currenIndex + 1
              ].img
            }
            className="next-img"
          />
        </div>

        {/* Project Details */}
        <div className="project-details">
          <h3>{projects[currenIndex].title}</h3>
          <p>{projects[currenIndex].info}</p>

          {/* Project Links */}
          <div className="project-links">
            <a href={projects[currenIndex].github}><button>GitHup</button></a>
            <a href={projects[currenIndex].replit}><button>Replit</button></a>
          </div>
        </div>
      </div>

      <div className="project-dots">
        {projects.map((project, projectIndex) => {
          return (
            <h1 onClick={() => goToProject(projectIndex)}>
              {projectIndex === currenIndex ? "◉" : "◎"}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectItems;
