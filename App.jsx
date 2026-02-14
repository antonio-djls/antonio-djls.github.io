import { GlassmorphismProfileCard } from './ProfileCard';
import { Github, Linkedin } from 'lucide-react';

const CodeforcesIcon = ({ size = 20, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <rect x="2.5" y="8" width="4.5" height="13.5" rx="1.5" fill="currentColor" opacity="0.6" />
        <rect x="9.75" y="4.5" width="4.5" height="17" rx="1.5" fill="currentColor" opacity="0.8" />
        <rect x="17" y="2.5" width="4.5" height="19" rx="1.5" fill="currentColor" />
    </svg>
);

/**
 * The Demo component that showcases the GlassmorphismProfileCard with specific props.
 */
const ProfileCardDemo = () => {
    const cardProps = {
        avatarUrl: '',
        name: 'Antônio Jorge',
        title: 'working...',
        bio: '',
        socialLinks: [
            { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/antoniodjls' },
            { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com/antonio-djls' },
            { id: 'codeforces', icon: CodeforcesIcon, label: 'Codeforces', href: 'https://codeforces.com/profile/_4n70n10' },
        ],
        actionButton: {
            text: 'Entre em contato',
            href: 'mailto:antoniodinizjorgelimasaraiva@gmail.com',
        },
    };

    return <GlassmorphismProfileCard {...cardProps} />;
};

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-background transition-colors duration-500 sm:p-8 w-full">
            <ProfileCardDemo />
        </div>
    )
}

export default App
