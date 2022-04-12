import React from 'react';
import titulo from '../media/Titulo.JPG';
import portfolioInfo from '../media/portfolio.json';

const Portfolio = () => {

  let skillsList= '';
  for(let i in portfolioInfo.resume.skills){
    if(parseInt(i) === portfolioInfo.resume.skills.length - 1) skillsList+= portfolioInfo.resume.skills[i].name;
    else skillsList+= portfolioInfo.resume.skills[i].name + " | ";
  };

  return (
    <div className='portfolio'>
      <img className='portfolio__image' src={titulo} alt="Profile"/>
      <div className='portfolio__container'>
        <p className='portfolio__container__title'>{portfolioInfo.portfolio.title}</p>
        <hr className='portfolio__container__separator'/>
        <p className='portfolio__container__skills-list'>{skillsList}</p>
        <div className='portfolio__container__social-media-list'>
          {
            portfolioInfo.portfolio['social-media'].map(social => <a key={`${social.id}-social`} href={social.href} target="_blank" rel="noopener noreferrer" ><i className={`${social.icon} portfolio__container__social-media-icon`} /></a>)
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;