
import React from 'react';
import { ArtWork } from '../types';

interface ArtGalleryProps {
  artworks: ArtWork[];
}

export const ArtGallery: React.FC<ArtGalleryProps> = ({ artworks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {artworks.map((art) => (
        <div 
          key={art.id} 
          className="group relative aspect-square overflow-hidden bg-[#1a1a1a] rounded-xl cursor-crosshair"
        >
          <img
            src={art.image}
            alt={art.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange mb-1">{art.category}</span>
            <h4 className="text-white font-bold">{art.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
