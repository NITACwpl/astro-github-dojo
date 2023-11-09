import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [preact()],
    buildOptions: {
        site: "https://NITACwpl.github.io/",
        base: "https://github.com/NITACwpl/astro-github-dojo"
    },
});
