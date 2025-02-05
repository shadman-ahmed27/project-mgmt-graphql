import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong Buddy...</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row">
          {data.projects.map((projects) => (
            <ProjectCard key={projects.id} project={projects} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
