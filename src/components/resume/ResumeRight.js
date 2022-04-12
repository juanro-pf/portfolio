import React from 'react';
import Certificates from './Certificates';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import portfolioInfo from '../../media/portfolio.json';

const ResumeRight = () => {
  return (
    <div className='resume__container__right'>
      <Education props={portfolioInfo.resume.education} />
      <hr className='resume__container__right__separator'/>
      <Experience props={portfolioInfo.resume.experience} />
      <hr className='resume__container__right__separator'/>
      <Skills props={portfolioInfo.resume.skills} />
      <hr className='resume__container__right__separator'/>
      <Certificates props={portfolioInfo.resume.certificates} />
    </div>
  );
};

export default ResumeRight;