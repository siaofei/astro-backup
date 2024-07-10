import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // By default, the integration imports a basic `base.css` file on
    // every page of your project. False if you need to define and/or
    // import you own custom `base.css`.
    applyBaseStyles: false
  }), alpinejs({
    entrypoint: '/src/entrypoint'
  }), icon()]
});