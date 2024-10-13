import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Ensures Vitest uses the jsdom environment
    globals: true, // Allows the use of global methods like `expect`
  },
});
