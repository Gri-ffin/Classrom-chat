module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        clouds: "url('/assets/center_bg_landing_header.svg')",
        signupBg: "url('/assets/login_bg.svg')",
      },
    },
  },
  plugins: [],
};
