import { useParams } from 'react-router-dom';
import BtnGithub from '../components/btngithub/BtnGithub';
import { projects } from './../helpers/projectsList';
import img from './../img/projects/02-big.jpg';
const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  console.log(project);
  return (
    <>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>

            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />

            <div className="project-details__desc">
              <p>{project.skills}</p>
            </div>
            {project.gitHubLink && <BtnGithub link="https://github.com" />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
