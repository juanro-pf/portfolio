import React from 'react';

const Certificates = props => {

  const certificates= props.props;

  return (
    <div className='resume__container__right__certificates'>
      <p className='resume__container__right__title'>Certificates</p>
      <ul>
      {
        certificates.map(cert => (
            <li key={`${cert.id}-cert`} className='resume__container__right__certificates__cert'>{cert.cert}</li>
        ))
      }
      </ul>
    </div>
  );
};

export default Certificates;