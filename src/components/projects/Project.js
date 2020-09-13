import React from 'react';

export const Project = (props) => {

  const { alt, path, title, info }= props.props;

  return (
    <div className= 'animate__animated animate__bounceIn'>
      <img src={path} alt={alt} />
      <hr />
      <p className= 'project-title'><b>{title}</b></p>
      <hr />
      <p className= 'project-info'>{info}</p>
    </div>
  );
};
