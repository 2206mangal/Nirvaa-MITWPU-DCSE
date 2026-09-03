/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          ink: {
            950: '#05070d',
            900: '#0a0e1a',
            800: '#0f1623',
            700: '#1a2332',
            600: '#243044',
          },
          accent: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
          },
        },
        fontFamily: {
          display: ['"Space Grotesk"', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'monospace'],
        },
        animation: {
          'fade-up': 'fadeUp 0.7s ease-out forwards',
          'fade-in': 'fadeIn 0.7s ease-out forwards',
          'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
          'glow': 'glow 3s ease-in-out infinite',
          'float': 'float 6s ease-in-out infinite',
          'scan': 'scan 8s linear infinite',
          'dash': 'dash 3s linear infinite',
          'blink': 'blink 2s ease-in-out infinite',
        },
        keyframes: {
          fadeUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          pulseSlow: {
            '0%, 100%': { opacity: '0.4' },
            '50%': { opacity: '0.8' },
          },
          glow: {
            '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.15)' },
            '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.3)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
          scan: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100vh)' },
          },
          dash: {
            '0%': { strokeDashoffset: '200' },
            '100%': { strokeDashoffset: '0' },
          },
          blink: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.3' },
          },
        },
      },
    },
    plugins: [],
  };
  