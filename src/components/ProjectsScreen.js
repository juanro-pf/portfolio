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
      <Project props= {{
        path: require('../media/Calendar.PNG'),
        alt: 'Calendar img',
        title: 'Calendar application.',
        info: 'In this project I developed a calendar app using React.js. Please visit my repo at <link>https://github.com/juanro-pf/react<link> to get the URL for this project and more React.js projects.'
      }}/>
      <Project props= {{
        path: require('../media/Natours.PNG'),
        alt: 'Natours img',
        title: 'Natours application.',
        info: 'In this project I developed a tours API using Node.js, Express and MongoDB. Please visit my repo at <link>https://github.com/juanro-pf/back-natours<link> to get the URL for this project.'
      }}/>
      <Project props= {{
        path: require('../media/Employees-list.jpg'),
        alt: 'Employees-list img',
        title: 'Employees list application.',
        info: 'In this project I developed an application to keep track of your employees with features like taking a picture, search by employee and more. This was developed with React.js. Check it out at <link>https://juanro-pf.github.io/react-employees-list<link>, feel free to add, edit, take pictures and whatever you want, everything is stored in your localStorage, so do not worry, no one will see the pictures you take :)'
      }}/>
      <Project props= {{
        path: require('../media/20-words.jpg'),
        alt: '20 words img',
        title: '20 words time trial application.',
        info: 'In this project I developed an application to see how fast you can type 20 random words fetched from an API. This was developed with React.js. Check how fast you can type 20 words at <link>https://juanro-pf.github.io/typing-20-words<link>.'
      }}/>
    </div>
  );
};