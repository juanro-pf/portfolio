import React from 'react';
import titulo from '../../media/Titulo.JPG';
import portfolioInfo from '../../media/portfolio.json';

const ResumeLeft = () => {
  return (
    <div className='resume__container__left'>
      <img className='resume__container__left__image' src={titulo} alt='Profile' />
      <p className='resume__container__left__name'>{portfolioInfo.resume.name}</p>
      <p className='resume__container__left__title'>{portfolioInfo.resume.title}</p>
      <hr className='resume__container__left__separator'/>
      <p className='resume__container__left__content'>{portfolioInfo.resume.content}</p>
      <hr className='resume__container__left__separator'/>
      <a href={require('../../media/Rodrigo_Ponce_English.pdf')}>
        <div className='resume__container__left__download'>
          <i className='fa-solid fa-download' />
          <p className='resume__container__left__download--text'>Download resume</p>
        </div>
      </a>
    </div>
  );
};

export default ResumeLeft;