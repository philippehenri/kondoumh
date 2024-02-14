import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	  output: 'server',
  adapter: vercel(),
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	base: process.env.NODE_ENV === "production" ? "/astro-doc-site-example/" : "./",
	site: `http://astro.build`,
});
