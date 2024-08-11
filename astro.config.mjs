import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

////       this is were integrations can be added      ////
// https://astro.build/config
export default defineConfig({
  // I added the tailwind css integration in order to keep track and have some sort of documentation on the css
  integrations: [tailwind()]
});