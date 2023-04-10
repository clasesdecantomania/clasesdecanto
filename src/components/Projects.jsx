import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from '../assets/event.png';
import cryptoImg from '../assets/event.png';
import netflixImg from '../assets/event.png';
import twitchImg from '../assets/event.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 ру-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime
        laudantium molestiae facere consectetur minima, soluta sint dolor, id
        culpa porro eius vel magnam. Atque temporibus dolor tempore vel non.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={cryptoImg} title='Crypto App' />
        <ProjectItem img={propertyImg} title='Property App' />
        <ProjectItem img={netflixImg} title='Netflix App' />
        <ProjectItem img={twitchImg} title='Twitch App' />
      </div>
    </div>
  );
};
export default Projects;
