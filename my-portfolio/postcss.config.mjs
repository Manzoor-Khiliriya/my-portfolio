// postcss.config.js - The CORRECT v4 Configuration

const config = {
  plugins: {
    // 1. Use the new v4 PostCSS plugin name
    "@tailwindcss/postcss": {}, 
    
    // 2. Autoprefixer is often still needed, though sometimes bundled in v4 setups
    autoprefixer: {}, 
  },
};

export default config;