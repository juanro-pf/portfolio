import React from 'react';

const Skills = props => {

  const skills= props.props;

  return (
    <div className='resume__container__right__skills'>
      <p className='resume__container__right__title'>Skills</p>
      {
        skills.map(skill => (
          <div key={`${skill.id}-skill`} className='resume__container__right__skills__skill'>
            <p className='resume__container__right__skills__skill__name'>{skill.name}</p>
            <div className='resume__container__right__skills__skill__percentage'>
              <hr style={{ width: `${skill.percentage}%`, border: '2.5px solid #391ce0', backgroundColor:'#391ce0' }}/>
              <hr style={{ width: `${100 - skill.percentage}%`, border: '2.5px solid #d6d1f1', backgroundColor:'#d6d1f1' }}/>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Skills;