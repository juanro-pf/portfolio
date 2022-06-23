import React from 'react';
import Project from './projects/Project';
import image1 from '../media/CanadaImage.png';
import image2 from '../media/Brazo.png';
import image3 from '../media/Cluster.png';
import image4 from '../media/Calendar.PNG';
import image5 from '../media/Natours.PNG';
import image6 from '../media/Employees-list.jpg';
import image7 from '../media/20-words.jpg';
import image8 from '../media/Trace.png';
import image9 from '../media/BrainGame.PNG'
import portfolioInfo from '../media/portfolio.json';

const projects= [...portfolioInfo.projects];
projects[0].image= image1;
projects[1].image= image2;
projects[2].image= image3;
projects[3].image= image4;
projects[4].image= image5;
projects[5].image= image6;
projects[6].image= image7;
projects[7].image= image8;
projects[8].image= image9;

const Projects = () => {
  return (
    <div className='projects__container'>
      {
        projects.map(project => <Project key={project.id} props={project} />)
      }
    </div>
  );
};

export default Projects;