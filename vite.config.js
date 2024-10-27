import { defineConfig } from "vitest/config"; // Import defineConfig from vitest
import react from "@vitejs/plugin-react"; // Import the React plugin

// Export the Vite configuration using ES module syntax
export default defineConfig({
  plugins: [react()], // Use the React plugin
  test: {
    environment: "jsdom", // Necessary for DOM-related testing
    globals: true, // Enables global `test` and `expect`
    setupFiles: "./setupTests.ts", // Path to setupTests to include jest-dom
  },
});
