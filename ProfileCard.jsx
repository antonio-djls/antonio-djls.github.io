import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { User } from 'lucide-react';

//================================================================================
// REUSABLE COMPONENT (your-component/code.tsx)
// This is the core, reusable component logic. It is fully customizable via props.
//================================================================================

/**
 * --- Glassmorphism Profile Card Component ---
 * A responsive, animated, and themeable profile card with a glassmorphism effect.
 * @param {object} props - The component props.
 * @param {string} props.avatarUrl - URL for the user's avatar image.
 * @param {string} props.name - The user's name.
 * @param {string} props.title - The user's title or role.
 * @param {string} props.bio - A short biography for the user.
 * @param {SocialLink[]} props.socialLinks - An array of social link objects.
 * @param {ActionButtonProps} props.actionButton - Props for the main call-to-action button.
 */
export const GlassmorphismProfileCard = ({
    avatarUrl,
    name,
    title,
    bio,
    socialLinks = [],
    actionButton,
}) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div className="relative w-full max-w-sm">
            <div
                className="relative flex flex-col items-center p-8 rounded-3xl border transition-all duration-500 ease-out backdrop-blur-xl bg-slate-900/35 border-cyan-200/30"
                style={{
                    boxShadow: '0 10px 30px rgba(2, 8, 23, 0.28)',
                }}
            >
                <div className="w-24 h-24 mb-4 rounded-full p-1 border-2 border-white/20">
                    {avatarUrl ? (
                        <img
                            src={avatarUrl}
                            alt={`${name}'s Avatar`}
                            className="w-full h-full rounded-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/96x96/6366f1/white?text=${name.charAt(0)}`; }}
                        />
                    ) : (
                        <div className="w-full h-full rounded-full flex items-center justify-center bg-slate-900/65">
                            <User size={34} className="text-cyan-200/90" />
                        </div>
                    )}
                </div>

                <h2 className="text-2xl font-bold text-slate-100">{name}</h2>
                <p className="mt-1 text-sm font-medium text-cyan-200">{title}</p>
                {bio ? <p className="mt-4 text-center text-sm leading-relaxed text-slate-300">{bio}</p> : null}

                <div className="w-1/2 h-px my-6 rounded-full bg-cyan-200/30" />

                <div className="flex items-center justify-center gap-3">
                    {socialLinks.map((item) => (
                        <SocialButton key={item.id} item={item} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
                    ))}
                </div>

                <ActionButton action={actionButton} />
            </div>

            <div className="absolute inset-0 rounded-3xl -z-10 transition-all duration-500 ease-out blur-2xl opacity-30 bg-gradient-to-r from-cyan-400/45 to-blue-500/45" />
        </div>
    );
};

// --- Sub-components (Internal to GlassmorphismProfileCard) ---

const SocialButton = ({ item, setHoveredItem, hoveredItem }) => (
    <div className="relative">
        <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out group overflow-hidden bg-slate-800/55 hover:bg-slate-700/65 border border-cyan-200/20"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            aria-label={item.label}
        >
            <div className="relative z-10 flex items-center justify-center">
                <item.icon size={20} className="transition-all duration-200 ease-out text-slate-200/80 group-hover:text-cyan-100" />
            </div>
        </a>
        <Tooltip item={item} hoveredItem={hoveredItem} />
    </div>
);

const ActionButton = ({ action }) => (
    <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 mt-8 rounded-full font-semibold text-base backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 group bg-cyan-300 text-slate-950"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
    >
        <span>{action.text}</span>
        <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
    </a>
);

const Tooltip = ({ item, hoveredItem }) => (
    <div
        role="tooltip"
        className={`absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg backdrop-blur-md border text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-slate-900 text-slate-100 border-cyan-200/30 ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
    >
        {item.label}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-slate-900 border-b border-r border-cyan-200/30" />
    </div>
);
