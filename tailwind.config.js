const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        clouds: "url('/assets/center_bg_landing_header.svg')",
        signupBg: "url('/assets/login_bg.svg')",
        loginBg: "url('/assets/login_bg.png')",
      },
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.neutral,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
    },
  },
  plugins: [],
};
