import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  theme: {
    extend: {
      animation: {
        'move-forever': 'moveForever 6s linear infinite',
      },
      keyframes: {
        moveForever: {
          '0%': { transform: 'translateX(-90px)' },
          '100%': { transform: 'translateX(85px)' },
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Splitting node_modules into a separate chunk
          }
        },
      },
    },
    chunkSizeWarningLimit: 1024, // Set chunk warning limit to 1MB
  },
});
