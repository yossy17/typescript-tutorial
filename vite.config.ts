import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["highlight.js/lib/core"],
  },
});
