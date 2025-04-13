import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CreativeGrid, { GridItem } from '../Layout/CreativeGrid';
import ArtisticText from '../UI/ArtisticText';
import RotatingCard from '../UI/RotatingCard';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="min-h-screen w-full py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-lg mx-auto mb-16">
        <ArtisticText 
          text="Featured Projects"
          splitBy="letter"
          effect="slide"
          fontSize="2rem"
          fontWeight="700"
          className="text-3xl md:text-4xl font-bold mb-16"
        />
      </div>
      
      <CreativeGrid>
        {projects.map((project, index) => {
          // Alternate between different grid layouts
          let colConfig = {};
          
          switch (index % 4) {
            case 0:
              colConfig = { colStart: 1, colEnd: 7 };
              break;
            case 1:
              colConfig = { colStart: 7, colEnd: 13 };
              break;
            case 2:
              colConfig = { colStart: 3, colEnd: 10 };
              break;
            case 3:
              colConfig = { colStart: 1, colEnd: 6 };
              break;
            default:
              colConfig = { colStart: 1, colEnd: 7 };
          }
          
          return (
            <GridItem key={project.id} {...colConfig}>
              <RotatingCard
                frontContent={
                  <div className="h-full w-full p-4 flex flex-col">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.shortDescription}</p>
                  </div>
                }
                backContent={
                  <div className="h-full w-full p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 bg-white text-black rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm underline"
                    >
                      View Project →
                    </a>
                  </div>
                }
              />
            </GridItem>
          );
        })}
      </CreativeGrid>
    </section>
  );
};

export default Projects;
