import React from 'react';
import { Education } from './Education';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Certificates } from './Certificates';

export const Resume = () => {
  return (
    <div className= 'resume-in animate__animated animate__fadeInRight'>
      <p className= 'resume-in-title'>Education</p>
      <Education props= {{
        dates: 'Aug 2015 - Jun 2020',
        school: 'Tecnológico de Monterrey',
        body: 'Mechatronics engineering (Academic scholarship 35% pure 35% funding).'
      }}/>
      <Education props= {{
        dates: 'May 2019 - Aug 2019',
        school: 'University of Ontario Institute of Technology',
        body: 'Research internship, VR, AR, MR (100% scholarship).'
      }}/>
      <Education props= {{
        dates: 'Aug 2020 - Mar 2022',
        school: 'Universidad Latinoamericana',
        body: 'Master of Business Administration (50% scholarship).'
      }}/>
      <hr />
      <p className= 'resume-in-title'>Experience</p>
      <Experience props= {{
        dates: 'Oct 2019 - Present',
        company: 'Prokarma, Querétaro, Querétaro',
        position: 'Apigee Support',
        bullets: [
          'Support the apigee developers with code issues and platform issues.'
        ]
      }}/>
      <Experience props= {{
        dates: 'Mar 2018 - May 2018',
        company: 'Visteon, Querétaro, Querétaro',
        position: 'Validation trainee',
        bullets: [
          'Test the company equipment to check its proper functioning.'
        ]
      }}/>
      <Experience props= {{
        dates: 'Sep 2015 - Jan 2016',
        company: 'Ford MONTES, Celaya, Guanajuato',
        position: 'Salesman',
        bullets: [
          'Car sales.'
        ]
      }}/>
      <hr />
      <p className= 'resume-in-title'>Skills</p>
      <Skills props= {{ name: 'ReactJS', percentage: 80 }}/>
      <Skills props= {{ name: 'Javascript', percentage: 75 }}/>
      <Skills props= {{ name: 'HTML', percentage: 75 }}/>
      <Skills props= {{ name: 'CSS', percentage: 75 }}/>
      <Skills props= {{ name: 'Labview', percentage: 75 }}/>
      <Skills props= {{ name: 'Arduino', percentage: 70 }}/>
      <Skills props= {{ name: 'Machine Learning', percentage: 65 }}/>
      <Skills props= {{ name: 'Apigee', percentage: 65 }}/>
      <Skills props= {{ name: 'Spring', percentage: 65 }}/>
      <Skills props= {{ name: 'Git', percentage: 60 }}/>
      <Skills props= {{ name: 'C', percentage: 60 }}/>
      <Skills props= {{ name: 'NodeJS', percentage: 50 }}/>
      <Skills props= {{ name: 'MongoDB', percentage: 50 }}/>
      <Skills props= {{ name: 'Python', percentage: 50 }}/>
      <Skills props= {{ name: 'Java', percentage: 40 }}/>
      <Skills props= {{ name: 'MySQL', percentage: 40 }}/>
      <Skills props= {{ name: 'Unity', percentage: 40 }}/>
      <br />
      <hr />
      <p className= 'resume-in-title'>Certificates</p>
      <Certificates props={['CSWA SolidWorks International certification.', 'TOEFL score 603.']}/>
    </div>
  );
};
