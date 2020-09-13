import React from 'react';
import { Info } from './contact/Info';

export const ContactScreen = () => {
  return (
    <div className= 'contact'>
      <div className= 'contact-left animate__animated animate__bounceInLeft'>
        <p className= 'contact-name'>Juan Rodrigo Ponce Flores</p>
        <img
          className= 'contact-img'
          src={require('../media/Titulo.JPG')}
          alt="Profile pic"
        />
      </div>
      <div className= 'contact-right animate__animated animate__bounceInRight'>
        <p>Contact me</p>
        <hr />
        <Info props= {{ icon: 'fas fa-phone', data: '(461) 279-1146' }}/>
        <Info props= {{ icon: 'fas fa-envelope', data: 'juanro.pf@gmail.com' }}/>
        <Info props= {{ icon: 'fab fa-skype', data: 'live:juanro.pf' }}/>
        <Info props= {{ icon: 'fab fa-linkedin-in', data: 'Rodrigo Ponce' }}/>
      </div>
    </div>
  );
};