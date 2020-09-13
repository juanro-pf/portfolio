import React from 'react';

export const Education = (props) => {

  const { dates, school, body }= props.props;

  return (
    <div className= 'education'>
      <p className= 'edu-dates'>{dates}</p>
      <div className= 'edu-content'>
        <p className= 'edu-school'>{school}</p>
        <p className= 'edu-data'>{body}</p>
      </div>
    </div>
  );
};
