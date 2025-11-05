import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/icons/index.js",
      name: "MxIcons",
      fileName: (format) => `mx-icons.${format}.js`,
    },
    rollupOptions: {
      // Don't bundle peer deps
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
