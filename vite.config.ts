import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { visualizer } from 'rollup-plugin-visualizer';
import remarkFrontmatter from 'remark-frontmatter';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import yaml from '@rollup/plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    yaml({
      include:'./src/config/task.yaml',
    }),
    // should be last
    visualizer(),
  ],
  resolve: {
    alias: {
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
});
