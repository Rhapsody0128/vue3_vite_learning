import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [path.resolve(__dirname, "src/style/index.styl")],
      },
    },
  },
});
