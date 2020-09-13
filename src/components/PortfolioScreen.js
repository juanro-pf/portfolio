import React from 'react';

export const PortfolioScreen = () => {
return (
    <div className= 'portfolio'>
      <img
      className= 'port-img animate__animated animate__fadeInDown animate__fast'
      src={require('../media/Titulo.JPG')}
        alt="Profile pic"
      />
      <div className= 'port-data animate__animated animate__fadeInUp animate__fast'>
        <p className= 'port-title'>Mechatronics Engineer</p>
        <hr />
        <p className= 'port-skills'>
          ReactJS | NodeJS | JavaScript | HTML | CSS | MongoDB | MySQL | Apigee | Spring | Git | Machine Learning | Python | Java | C | Labview | Unity | Arduino
        </p>
        <div className= 'port-icons'>
          {/* Facebook */}
          <a href="https://www.facebook.com/gordo309" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-facebook" aria-hidden="true"/>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/juanro.pf/" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-instagram" aria-hidden="true"/>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rodrigo-ponce-0a98a714b" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin-in" aria-hidden="true"/>
          </a>
          {/* GitHub */}
          <a href="https://github.com/juanro-pf" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github" aria-hidden="true"/>
          </a>
        </div>
      </div>
    </div>
  );
};