export const checkForLinks = (text, links) => {
  const parts= text.split('<link>');
  const htmlParts= [];
  for(let part in parts){
    if(part%2 === 0){
      htmlParts.push(parts[part]);
    }else{
      htmlParts.push(<a key={`${parts[part]}-part${part}`} href={links[parts[part]].url} target="_blank" rel="noopener noreferrer">{links[parts[part]]['display-text']}</a>);
    }
  }
  return (<p className="projects__container__project__description">{htmlParts}</p>);
};