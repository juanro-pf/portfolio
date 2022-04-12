import React from 'react';
import ResumeLeft from './resume/ResumeLeft';
import ResumeRight from './resume/ResumeRight';

const Resume = () => {
  return (
    <div className='resume__container'>
        <ResumeLeft />
        <ResumeRight />
    </div>
  );
};

export default Resume;