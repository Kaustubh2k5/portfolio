
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { ChatBot } from './components/ChatBot';
import { ArtGallery } from './components/ArtGallery';
import { Project, ArtWork, Experience } from './types';
import { 
  Palette, Code2, Brain, History, ArrowRight, Award, 
  Binary, Cpu, Server, Cloud, Container, Github, 
  Globe, Database, Rocket, Terminal, Layers
} from 'lucide-react';
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'bangalore.now',
    description: 'Breakthrough Innovation Award Winner. A real-time living map with an AI radio host using Eleven Labs and Gemini API for voiceover.',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=800',
    tags: ['Gemini API', 'Vertex AI', 'FastAPI'],
    link: 'https://github.com/Kaustubh2k5'
  },
  {
    id: '2',
    title: 'CycleGAN Lunar Features',
    description: 'Extracted 20-25% additional lunar features from noisy ISRO OSR imagery using unpaired image2image translation pipelines.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    tags: ['PyTorch', 'CycleGAN', 'ISRO OSR'],
    link: 'https://github.com/Kaustubh2k5'
  },
  {
    id: '3',
    title: 'NewsMe AI Platform',
    description: 'Scalable FastAPI newsletter service with Dockerized deployment, serving customized content to 100+ active users.',
    image: '.src/assets/newsme.png',
    tags: ['Docker', 'FastAPI', 'Scraping'],
    link: 'https://newsmeai.xyz'
  }
];

const ARTWORKS: ArtWork[] = [
  { id: '1', title: 'Original Sketches', category: 'Sketching', image: '.src/assets/original.jpeg' },
  { id: '2', title: 'Digital Sketches', category: 'Digital Art', image: '.src/assets/digital.jpeg' },
  { id: '3', title: 'From Popular Media', category: 'Illustration', image: '.src/assets/media.jpeg' },
  { id: '4', title: 'WIP', category: 'Design', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600' },
];

const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Research Intern',
    company: 'Centre for Neuroinformatics (VIT Chennai)',
    period: 'MAY 2025 — JULY 2025',
    description: 'Designed Siamese neural networks for EEG classification. Optimized preprocessing speed by 50% and authored research for IEEE Access.'
  },
  {
    id: '2',
    role: 'Projects Lead',
    company: 'DataScience Club VITC',
    period: '2024 — PRESENT',
    description: 'Leading research and industry projects. Mentored 100+ participants in Data Science hackathons/Workshops and community labs.'
  }
];

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCatTalking, setIsCatTalking] = useState(false);

  const handleCatClick = () => {
    setIsChatOpen(true);
    setIsCatTalking(true);
    setTimeout(() => setIsCatTalking(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-orange selection:text-white">
      <Navbar onCatClick={handleCatClick} isCatTalking={isCatTalking} />
      
      <main>
        {/* 1. Landing Page (Hero) */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />

          <div className="max-w-6xl mx-auto px-4 text-center z-10">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange text-white text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(255,123,0,0.3)]">
                <Award size={14} /> Winner: Google Cloud Agentic AI Day
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                <Github size={14} /> Open to Open Source
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black font-heading leading-none tracking-tight text-white mb-8">
              KAUSTUBH <span className="text-orange">SARDESAI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              <span className="text-white font-medium underline decoration-orange/50 underline-offset-8">Data-Science/ AI</span> & <span className="text-white font-medium underline decoration-orange/50 underline-offset-8"> Cloud/Backend Engineering</span>. 
              <br/><br/>Working on systems and research that actually matter.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="#work" className="group px-10 py-5 bg-orange text-white font-black rounded-xl flex items-center gap-3 hover:bg-orange/90 transition-all transform hover:-translate-y-1">
                View All Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-8">
                 <div className="flex flex-col items-center gap-1 opacity-30 hover:opacity-100 transition-opacity"><Database size={24}/><span className="text-[8px] font-black uppercase">Data</span></div>
                 <div className="flex flex-col items-center gap-1 opacity-30 hover:opacity-100 transition-opacity"><Cloud size={24}/><span className="text-[8px] font-black uppercase">Cloud</span></div>
                 <div className="flex flex-col items-center gap-1 opacity-30 hover:opacity-100 transition-opacity"><Terminal size={24}/><span className="text-[8px] font-black uppercase">Backend</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Research & Software Dev Skills */}
        <section className="py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-orange font-black uppercase tracking-widest text-xs">
                <Brain size={18} /> Research & Intelligence
              </div>
              <h2 className="text-4xl font-black font-heading leading-tight">THE SCIENTIFIC <br/>APPROACH.</h2>
              <p className="text-white/50 leading-relaxed font-light">
                Deep expertise in Neuroinformatics and Deep Learning. Wide scope of expertise from Transformers, Siamese Neural Networks to CycleGAN architectures for NLP, complex signal processing (EEG) and image translation (Lunar).
              </p>
              <div className="flex flex-wrap gap-3">
                {['PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-Learn'].map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-white/40 uppercase tracking-widest">{s}</span>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-orange font-black uppercase tracking-widest text-xs">
                <Layers size={18} /> Software & DevOps
              </div>
              <h2 className="text-4xl font-black font-heading leading-tight">ENGINEERED <br/>FOR SCALE.</h2>
              <p className="text-white/50 leading-relaxed font-light">
                Building robust backends with FastAPI and containerizing with Docker. Managing cloud-native architectures on GCP to ensure 99.9% availability for AI platforms.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Docker', 'Kubernetes', 'FastAPI', 'GCP', 'Node.js'].map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-white/40 uppercase tracking-widest">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Experience */}
        <section id="about" className="py-32 px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <History size={24} className="text-orange" />
            <h2 className="text-3xl font-black font-heading uppercase tracking-tighter">Professional Journey</h2>
          </div>
          <div className="space-y-16">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="group grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8 pb-16 border-b border-white/5 last:border-0">
                <div className="text-white/20 font-black text-xs tracking-[0.3em] pt-1 group-hover:text-orange transition-colors">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">{exp.role}</h3>
                  <div className="text-orange font-bold text-sm mb-6 flex items-center gap-2">
                    <Rocket size={14} /> {exp.company}
                  </div>
                  <p className="text-white/40 font-light max-w-4xl leading-relaxed text-lg">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Projects */}
        <section id="work" className="py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-20">
              <span className="text-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Selected Projects</span>
              <h2 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-white leading-none">
                AI & <span className="text-orange">BACKEND.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Open to Collaboration / GitHub */}
        <section className="py-40 border-y border-white/5 bg-orange/5 overflow-hidden">
           <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
             <div className="relative mb-12">
                <Github size={64} className="text-orange" />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-white rounded-full flex items-center justify-center animate-bounce">
                   <div className="w-2 h-2 bg-orange rounded-full" />
                </div>
             </div>
             <h2 className="text-5xl md:text-6xl font-black font-heading mb-8">OPEN TO <span className="text-orange">COLAB.</span></h2>
             <p className="text-white/60 max-w-2xl font-light text-xl mb-12 leading-relaxed">
               I'm actively looking for open-source projects and collaborative research roles. If you're building something innovative, let's talk.
             </p>
             <div className="flex flex-col sm:flex-row gap-6">
               <a 
                 href="https://github.com/Kaustubh2k5" 
                 target="_blank"
                 className="px-12 py-5 border-2 border-orange text-orange font-black rounded-xl hover:bg-orange hover:text-white transition-all transform hover:-translate-y-1"
               >
                 Explore GitHub
               </a>
               <button 
                 onClick={handleCatClick}
                 className="px-12 py-5 bg-white text-black font-black rounded-xl hover:bg-orange hover:text-white transition-all transform hover:-translate-y-1"
               >
                 Chat with Tangerine
               </button>
             </div>
           </div>
        </section>

        {/* 6. Fun Misc (Sketching & Art) */}
        <section className="py-32 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Misc Fun Stuff</span>
            <h2 className="text-5xl md:text-6xl font-black font-heading tracking-tight text-white mb-6">
              SKETCHING & <span className="text-orange">CANVAS.</span>
            </h2>
            <p className="text-white/30 max-w-2xl mx-auto font-light text-lg">
              When I'm not training models or scaling clusters, I'm exploring the visual aesthetics of the digital and physical world.
            </p>
          </div>
          <ArtGallery artworks={ARTWORKS} />
        </section>

        {/* Contact Footer */}
        <section id="contact" className="py-40 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-8xl font-black font-heading tracking-tight text-white mb-16 leading-tight">
              LET'S <span className="text-orange">INNOVATE</span> TOGETHER.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <a href="mailto:kaustubh2k5@gmail.com" className="group text-2xl md:text-3xl font-bold flex items-center gap-3 hover:text-orange transition-all">
                kaustubh2k5@gmail.com <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <div className="flex gap-8 text-white/30 font-black uppercase tracking-widest text-xs">
                 <a href="https://linkedin.com/in/kaustubh-sardesai" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                 <a href="https://github.com/Kaustubh2k5" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-black text-white/20 text-[10px] font-black uppercase tracking-[0.6em] text-center">
        Kaustubh Sardesai &bull; {new Date().getFullYear()} &bull; Data Science &bull; Cloud &bull; Art
      </footer>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;
