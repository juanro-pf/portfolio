import React from 'react';

export const Project = (props) => {

  const { alt, path, title, info }= props.props;

  const showInfo= () => {
    const identifier= '<link>';
    if(info.includes(identifier)){
      const firstIdentifierStart= info.indexOf(identifier);
      const urlStart= firstIdentifierStart + identifier.length;
      const cutStr= info.slice(urlStart);
      const urlEnd= cutStr.indexOf(identifier) + urlStart;
      const secondIdentifierEnd= urlEnd + identifier.length;
      const url= info.slice(urlStart, urlEnd);
      const firstPart= info.slice(0, firstIdentifierStart);
      const secondPart= info.slice(secondIdentifierEnd);
      return(
        <p className= 'project-info'>
          {firstPart}
          <a href={url} rel="noopener noreferrer" target="_blank">
            {url}
          </a>
          {secondPart}
        </p>
      );
    }else{
      return <p className= 'project-info'>{info}</p>;
    }
  };

  return (
    <div className= 'animate__animated animate__bounceIn'>
      <img src={path} alt={alt} />
      <hr />
      <p className= 'project-title'><b>{title}</b></p>
      <hr />
      {showInfo()}
    </div>
  );
};
