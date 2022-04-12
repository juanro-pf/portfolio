import React from 'react';
import { checkForLinks } from '../helpers/checkForLinks';

const Project = props => {

  const project= props.props;
  // checkForLinks(project.description, project.links);

  return (
    <div className='projects__container__project'>
      <img className='projects__container__project__image' src={project.image} alt='Project'/>
      <hr className='projects__container__project__separator'/>
      <p className='projects__container__project__name'>{project.name}</p>
      <hr className='projects__container__project__separator'/>
      {
        checkForLinks(project.description, project.links)
      }
      {/* <p className='projects__container__project__description'>{project.description}</p> */}
    </div>
  );
};

export default Project;