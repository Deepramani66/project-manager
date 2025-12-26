import React, { useState } from 'react';
import Sidebar from './Elements/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Project from './Elements/Project';
import NoProjectSelected from './Elements/NoProjectSelected';
import { ToastContainer } from "react-toastify";
import ProjectCard from './Elements/ProjectCard';
import ProjectDetail from './Elements/ProjectDetail';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [projectary, setProjectary] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedproject, setSelectedProject] = useState(null);

const handleDeleteProject = (projectId) => {
  setProjectary((prev) => {
    const updatedProjects = prev.filter(p => p.id !== projectId);

    console.log("Updated Project Array:", updatedProjects);

    return updatedProjects;
  });

  setSelectedProject(null);
  setIsDialogOpen(false);
};

  const datafetching = (data) => {
    setProjectary(prev => {
      const updatedArray = [...prev, data];
      console.log("Updated projectary:", updatedArray);
      return updatedArray;
    });
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };


  return (
    <>
      <Sidebar />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />

      <div className="pt-37.5 flex justify-center">
        <Routes>
          <Route
            path="/"
            element={
              projectary.length > 0 ? (
                <ProjectCard
                  projectary={projectary}
                  cardselect={handleCardClick}
                />
              ) : (
                <NoProjectSelected datafetching={datafetching} />
              )
            }
          />

          <Route
            path="/project"
            element={<Project datafetching={datafetching} />}
          />
        </Routes>

        <ProjectDetail
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          project={selectedproject}
          onDeleteProject={handleDeleteProject}
          projectary={projectary}
          setProjectary={setProjectary}
        />
      </div>
    </>
  );
};

export default App;
