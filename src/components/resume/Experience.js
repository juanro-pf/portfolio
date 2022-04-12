import React from 'react';

const Experience = props => {

  const experience= props.props;

  return (
    <div className='resume__container__right__experience'>
      <p className='resume__container__right__title'>Experience</p>
      {
        experience.map(job => (
          <div key={`${job.id}-experience`} className='resume__container__right__experience__job'>
            <p className='resume__container__right__experience__job__dates'>{job['start-date']} - {job['end-date']}</p>
            <div className='resume__container__right__experience__job__info'>
              <p className='resume__container__right__experience__job__info__company'>{job.company}</p>
              <p className='resume__container__right__experience__job__info__role'>{job.role}</p>
              <ul className='resume__container__right__experience__job__info__responsabilities'>
              {
                job.responsabilities.map((responsability, index) => (
                  <li key={`${index}-responsability`} >{responsability}</li>
                ))
              }
              </ul>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Experience;