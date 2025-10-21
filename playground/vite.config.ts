import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 开发时直接引用源码，而不是构建后的 dist
      "@life-palette/utils": resolve(__dirname, "../packages/utils/src/index.ts"),
    },
  },
});
