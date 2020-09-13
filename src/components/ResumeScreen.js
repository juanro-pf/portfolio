import React from 'react';
import { Resume } from './resume/Resume';

export const ResumeScreen = () => {
  return (
    <div className= 'resume'>
      <div className= 'resume-out animate__animated animate__fadeInLeft'>
      <img
        className= 'resume-img'
        src={require('../media/Titulo.JPG')}
        alt="Profile pic"
      />
      <p className= 'resume-name'>Juan Rodrigo Ponce Flores</p>
      <p className= 'resume-title'>Mechatronics engineer</p>
      <hr />
      <p className= 'resume-text'>
        I am a mechatronics engineer, I have always liked the idea of automatizing processes and am passionate about everything related to it, but since the first semester of my career I noticed that what I like the most is programming.
      </p>
      <hr />
      <div className= 'animate__animated animate__heartBeat animate__delay-1s'>
        <a href={require('../media/CV_Eng.pdf')} download className= 'resume-download'>
          <p><i className="fas fa-file-download" aria-hidden="true"/>  Download resume</p>
        </a>
      </div>
      </div>
      <Resume />
    </div>
  );
};