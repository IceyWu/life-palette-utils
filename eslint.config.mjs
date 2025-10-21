import unjs from "eslint-config-unjs";

export default unjs({
  ignores: [
    "**/node_modules/**",
    "**/dist/**",
    "**/.vitepress/cache/**",
    "**/coverage/**",
  ],
  rules: {
    // 保持现有代码风格
    "unicorn/prefer-query-selector": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-add-event-listener": "off",
    "unicorn/prefer-blob-reading-methods": "off",
  },
  markdown: {
    rules: {
      // markdown rule overrides
    },
  },
});
