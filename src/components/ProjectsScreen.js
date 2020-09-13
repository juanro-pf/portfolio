import React from 'react';
import { Project } from './projects/Project';

export const ProjectsScreen = () => {
  return (
    <div className= 'projects'>
      <Project props= {{
        path: require('../media/CanadaImage.png'),
        alt: 'Canada img',
        title: 'Extending user interactions in virtual, augmented and mixed reality.',
        info: 'In this project I developed a system that sends the position of your arm to a virtual, augmented or mixed reality headset using arduino and unity.'
      }}/>
      <Project props= {{
        path: require('../media/Brazo.png'),
        alt: 'Arm img',
        title: 'Sketching robotic arm.',
        info: 'In this project my team developed a robotic arm with a friendly interface that was able to follow trajectories using arduino and unity.'
      }}/>
      <Project props= {{
        path: require('../media/Cluster.png'),
        alt: 'Cluster img',
        title: 'Car cluster simulation.',
        info: 'In this project my team developed an interface that when connecting the laptop to a car is able to obtain the same data that the driver can see on the cluster and even more using LabView.'
      }}/>
      {/* <div>
          <img src={require('../media/CanadaImage.png')} alt="Canada" />
          <hr />
          <p className= 'project-title'><b>Extending user interactions in virtual, augmented and mixed reality.</b></p>
          <hr />
          <p className= 'project-info'>In this project I developed a system that sends the position of your arm to a virtual, augmented or mixed reality headset using arduino and unity.</p>
      </div>
      <div>
          <img src={require('../media/Brazo.png')} alt="Arm" />
          <hr />
          <p className= 'project-title'><b>Sketching robotic arm.</b></p>
          <hr />
          <p className= 'project-info'>In this project my team developed a robotic arm with a friendly interface that was able to follow trajectories using arduino and unity.</p>
      </div>
      <div>
          <img src={require('../media/Cluster.png')} alt="Canada" />
          <hr />
          <p className= 'project-title'><b>Car cluster simulation.</b></p>
          <hr />
          <p className= 'project-info'>In this project my team developed an interface that when connecting the laptop to a car is able to obtain the same data that the driver can see on the cluster and even more using LabView.</p>
      </div> */}
    </div>
  );
};