import React from 'react';

export const Info = (props) => {

  const { icon, data }= props.props;

  return (
    <div className= 'contact-info'>
      <i className={icon} aria-hidden="true"/>
      <p>{data}</p>
    </div>
  );
};
