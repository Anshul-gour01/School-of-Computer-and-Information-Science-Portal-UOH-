// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Enable React plugin for Vite
  server: {
    host: "localhost", // Ensure the dev server runs on localhost
    port: 5173, // Default Vite port (can be changed if needed)
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Proxy API requests to backend server
        changeOrigin: true, // Adjust the origin of the request
        secure: false, // Disable HTTPS check (only needed for self-signed certs)
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Rewrite URL path
      },
    },
  },
});

