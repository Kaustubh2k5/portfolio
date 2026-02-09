
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Folder } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white/5 border border-white/5 rounded-3xl overflow-hidden hover:border-orange/30 transition-all duration-500">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-orange/10 rounded-lg text-orange">
            <Folder size={20} />
          </div>
          <div className="flex gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold text-white/30 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        <a 
          href={project.link}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-orange transition-colors"
        >
          View Case Study <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};
