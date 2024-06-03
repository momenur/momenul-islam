import Title from "../../Share/Title/Title";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/projects");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <section
      id="projects"
      className="w-full pb-20 border-b-[1px] border-b-black"
    >
      <Title
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        description="my projects"
      ></Title>
      <div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-14">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
