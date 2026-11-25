// Vite settings. You rarely need to change this file.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site from /<repository-name>/.
  // The deploy workflow sets BASE_PATH automatically, so every copy of this
  // template works without changes. Locally the site runs from "/".
  base: process.env.BASE_PATH || '/',
});
