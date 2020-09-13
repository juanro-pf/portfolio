import React from 'react';

export const Experience = (props) => {

  const { dates, company, position, bullets }= props.props;

  return (
    <div className= 'experience'>
      <p className= 'exp-dates'>{dates}</p>
      <div className= 'exp-content'>
        <p className= 'exp-company'>{company}</p>
        <p className= 'exp-position'>{position}</p>
        <ul>
          {
            bullets.map(bullet => (<li key= {bullet}>{bullet}</li>))
          }
        </ul>
      </div>
    </div>
  );
};