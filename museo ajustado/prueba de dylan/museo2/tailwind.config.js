module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Heritage Blue Foundation
        primary: {
          DEFAULT: "#1e40af", // blue-800 - Institutional trust and scholarly authority
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
        },
        // Secondary Colors - Sophisticated Neutrality
        secondary: {
          DEFAULT: "#64748b", // slate-500 - Sophisticated neutrality for extended reading
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
        },
        // Accent Colors - Interactive Discovery
        accent: {
          DEFAULT: "#0ea5e9", // sky-500 - Interactive discovery and engagement moments
          50: "#f0f9ff", // sky-50
          100: "#e0f2fe", // sky-100
          200: "#bae6fd", // sky-200
          300: "#7dd3fc", // sky-300
          400: "#38bdf8", // sky-400
          500: "#0ea5e9", // sky-500
          600: "#0284c7", // sky-600
          700: "#0369a1", // sky-700
          800: "#075985", // sky-800
          900: "#0c4a6e", // sky-900
        },
        // Background Colors
        background: "#fefefe", // neutral-50 - Clean canvas for content focus
        surface: "#f8fafc", // slate-50 - Subtle card elevation and section separation
        
        // Text Colors
        text: {
          primary: "#1e293b", // slate-800 - Comfortable reading without harsh contrast
          secondary: "#64748b", // slate-500 - Clear hierarchy and supporting information
        },
        
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600 - Positive contribution confirmation
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#d97706", // amber-600 - Gentle attention for important notices
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
        },
        error: {
          DEFAULT: "#dc2626", // red-600 - Clear problem identification
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
        },
        
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // slate-200
          light: "#f1f5f9", // slate-100
        },
      },
      fontFamily: {
        // Typography Standards
        crimson: ['Crimson Text', 'serif'], // Headlines and accents - Scholarly elegance
        inter: ['Inter', 'sans-serif'], // Body text and CTAs - Exceptional readability
        sans: ['Inter', 'sans-serif'], // Default sans-serif
        serif: ['Crimson Text', 'serif'], // Default serif
      },
      fontSize: {
        // Custom font sizes for museum content
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'exhibition': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section': ['2rem', { lineHeight: '1.3' }],
        'article': ['1.125rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      boxShadow: {
        // Visual Standards - Subtle elevation
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'modal': '0 10px 25px rgba(0, 0, 0, 0.2)',
        'interactive': '0 8px 20px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        // Smooth transitions for contemplative discovery
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'parallax': 'parallax 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        parallax: {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        // Animation Standards
        'smooth': '300ms',
        'quick': '200ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      spacing: {
        // Museum-specific spacing for content breathing room
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        // Content width constraints for optimal reading
        'reading': '65ch',
        'exhibition': '85ch',
      },
      zIndex: {
        // Layer management for interactive elements
        'modal': '1000',
        'overlay': '999',
        'dropdown': '100',
        'header': '50',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}