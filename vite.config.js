import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/7-react-space-tourism-website/",
  plugins: [react()],
});
