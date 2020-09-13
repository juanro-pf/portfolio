import React from 'react';

export const Certificates = (props) => {

  const certs= props.props;

  return (
    <ul className= 'certificates'>
      {
        certs.map( cert => (<li className= 'cert-item' key={cert}>{cert}</li>) )
      }
      <br />
    </ul>
  );
};