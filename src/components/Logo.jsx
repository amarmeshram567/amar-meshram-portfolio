

export default function Logo({ size = 44, className = '' }) {
    const id = 'am-imperial-monogram';

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-300 hover:scale-105 group ${className}`}
        >
            <defs>
                {/* Bright Champagne Gold for 'A' (Foreground) */}
                <linearGradient id={`${id}-gold-a`} x1="16" y1="10" x2="44" y2="54" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFDF5" />
                    <stop offset="30%" stopColor="#F3CE83" />
                    <stop offset="70%" stopColor="#D49B35" />
                    <stop offset="100%" stopColor="#8A5A10" />
                </linearGradient>

                {/* Rich Antique Gold for 'M' (Background/Interlock) */}
                <linearGradient id={`${id}-gold-m`} x1="12" y1="16" x2="54" y2="54" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E5B869" />
                    <stop offset="50%" stopColor="#B37D24" />
                    <stop offset="100%" stopColor="#593806" />
                </linearGradient>

                {/* Subtle Border Gradient */}
                <linearGradient id={`${id}-border`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F3CE83" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#262626" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#D49B35" stopOpacity="0.5" />
                </linearGradient>

                {/* Soft Drop Shadow to separate 'A' from 'M' */}
                <filter id={`${id}-shadow`} x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.75" />
                </filter>
            </defs>

            {/* Matte Obsidian Squircle Base */}
            <rect
                x="2"
                y="2"
                width="60"
                height="60"
                rx="14"
                fill="#0B0B0B"
                stroke={`url(#${id}-border)`}
                strokeWidth="1.2"
            />

            {/* Inner Architectural Corner Accents */}
            <path
                d="M10 18V12C10 10.8954 10.8954 10 12 10H18M54 18V12C54 10.8954 53.1046 10 52 10H46M10 46V52C10 53.1046 10.8954 54 12 54H18M54 46V52C54 53.1046 53.1046 54 52 54H46"
                stroke="#D49B35"
                strokeWidth="0.8"
                strokeOpacity="0.35"
                strokeLinecap="round"
            />

            {/* LETTER 'M' — Wide, bold structural pillars */}
            <path
                d="M11 49V21H16.5L26 35.5L35.5 21H41V49H35.5V29.5L26 43.5L16.5 29.5V49H11Z"
                transform="translate(11, 0)"
                fill={`url(#${id}-gold-m)`}
            />

            {/* LETTER 'A' — Sharp, elevated apex with distinct crossbar */}
            <g filter={`url(#${id}-shadow)`}>
                <path
                    d="M25.5 13L12 49H17.8L20.8 40.5H30.2L33.2 49H39L25.5 13ZM22.4 35.5L25.5 26.2L28.6 35.5H22.4Z"
                    fill={`url(#${id}-gold-a)`}
                />
            </g>

            {/* Diamond Crown Accent at the Top Peak */}
            <polygon points="25.5,7.5 27.5,10 25.5,12.5 23.5,10" fill="#FFFDF5" />
        </svg>
    );
}




