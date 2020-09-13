import React from 'react';

export const Skills = (props) => {

  const {name, percentage}= props.props;

  return (
    <div className= 'skills'>
      <p className= 'skill-name'>{name}</p>
      <div className= 'skill-progress'>
        <div style= {{ width: `${percentage}%`, backgroundColor: '#3A0CA3'}}/>
        <div style= {{ width: `${100 - percentage}%`, backgroundColor: '#EDF2FB'}}/>
      </div>
    </div>
  );
};