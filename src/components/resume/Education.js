import React from 'react';

const Education = props => {

  const education= props.props;

  return (
    <div className='resume__container__right__education'>
      <p className='resume__container__right__title'>Education</p>
      {
        education.map(school => (
          <div key={`${school.id}-education`} className='resume__container__right__education__school'>
            <p className='resume__container__right__education__school__dates'>{school['start-date']} - {school['end-date']}</p>
            <div className='resume__container__right__education__school__info'>
              <p className='resume__container__right__education__school__info__name'>{school['school-name']}</p>
              <p className='resume__container__right__education__school__info__description'>{school.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Education;