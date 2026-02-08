import React, { useState } from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

export default function Component() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0d1117]">
      {/* Solid Background with subtle grid */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#58a6ff 1px, transparent 1px), linear-gradient(90deg, #58a6ff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center min-h-screen p-4 sm:p-8">
        <ProfileCardDemo />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-blue-500/20 font-mono text-xs hidden md:block">
        &lt;portfolio /&gt;
      </div>
      <div className="absolute bottom-10 right-10 text-blue-500/20 font-mono text-xs hidden md:block">
        v1.0.0
      </div>
    </div>
  );
}

const ProfileCardDemo = () => {
  const cardProps = {
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Antonio',
    name: 'Antônio Jorge',
    bio: 'Estudante de Engenharia da Computação',
    socialLinks: [
      { 
        id: 'linkedin', 
        icon: Linkedin, 
        label: 'LinkedIn', 
        href: 'https://www.linkedin.com/in/antoniodjls' 
      },
      { 
        id: 'github', 
        icon: Github, 
        label: 'GitHub', 
        href: 'https://github.com/antonio-djls' 
      },
      { 
        id: 'codeforces', 
        icon: Code, 
        label: 'Codeforces', 
        href: '#' 
      },
    ],
    formula: '∫ curiosidade dτ = inovação + conhecimento',
  };

  return <EngineeringProfileCard {...cardProps} />;
};

const EngineeringProfileCard = ({
  avatarUrl,
  name,
  bio,
  socialLinks = [],
  formula,
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="relative w-full max-w-md">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl -z-10 transition-all duration-700 ease-out blur-3xl opacity-40 bg-gradient-to-br from-blue-500/40 via-cyan-500/30 to-blue-600/40 animate-pulse" />
      
      {/* Card */}
      <div 
        className="relative flex flex-col items-center p-8 rounded-3xl border border-[#21262d] transition-all duration-500 ease-out backdrop-blur-xl bg-[#161b22]/60 hover:border-[#58a6ff]/30"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        }}
      >
        {/* Avatar with engineering-style border */}
        <div className="relative w-28 h-28 mb-5 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/50 to-cyan-500/50 blur-md group-hover:blur-lg transition-all duration-500" />
          <div className="relative w-full h-full rounded-full p-1 border-2 border-[#58a6ff]/40 bg-[#161b22] group-hover:border-[#58a6ff] transition-all duration-500">
            <img 
              src={avatarUrl} 
              alt={`${name}'s Avatar`}
              className="w-full h-full rounded-full object-cover"
              onError={(e) => { 
                e.target.onerror = null; 
                e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${name}`; 
              }}
            />
          </div>
          {/* Corner brackets */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-[#58a6ff]/60 rounded-tl-lg" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-[#58a6ff]/60 rounded-br-lg" />
        </div>

        {/* Name and Title */}
        <h2 className="text-3xl font-bold text-[#c9d1d9] tracking-tight">{name}</h2>
        
        {/* Bio */}
        <p className="mt-5 text-center text-sm leading-relaxed text-[#8b949e] px-2">{bio}</p>

        {/* Engineering Formula Display */}
        <div className="w-full mt-6 p-4 rounded-xl bg-[#0d1117]/80 border border-[#21262d]">
          <div className="font-mono text-center text-sm text-[#58a6ff]/90">
            {formula}
          </div>
        </div>

        {/* Divider with circuit-like decoration */}
        <div className="relative w-full my-7">
          <div className="h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#58a6ff] rounded-full shadow-[0_0_10px_rgba(88,166,255,0.5)]" />
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((item) => (
            <SocialButton 
              key={item.id} 
              item={item} 
              setHoveredItem={setHoveredItem} 
              hoveredItem={hoveredItem} 
            />
          ))}
        </div>

        {/* Tech decoration at bottom */}
        <div className="mt-6 flex items-center gap-1 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#58a6ff] rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
          ))}
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-[#58a6ff]/30 rounded-tl-xl" />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-[#58a6ff]/30 rounded-br-xl" />
    </div>
  );
};

const SocialButton = ({ item, setHoveredItem, hoveredItem }) => (
  <div className="relative">
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ease-out group overflow-hidden bg-[#0d1117]/80 border border-[#21262d] hover:border-[#58a6ff] hover:shadow-[0_0_20px_rgba(88,166,255,0.3)]"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      aria-label={item.label}
    >
      {/* Animated background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 flex items-center justify-center">
        <item.icon 
          size={22} 
          className="transition-all duration-300 ease-out text-[#8b949e] group-hover:text-[#58a6ff] group-hover:scale-110" 
        />
      </div>

      {/* Corner indicators */}
      <div className="absolute top-1 right-1 w-1 h-1 bg-[#58a6ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
    <Tooltip item={item} hoveredItem={hoveredItem} />
  </div>
);

const Tooltip = ({ item, hoveredItem }) => (
  <div 
    role="tooltip"
    className={`absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg backdrop-blur-md border border-[#21262d] text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-[#161b22]/95 text-[#c9d1d9] shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
  >
    {item.label}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#161b22] border-b border-r border-[#21262d]" />
  </div>
);
