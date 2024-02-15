import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // change port to 8080 only on amazon ec2
  server: { port: 8080, host: true}
});