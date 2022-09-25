import adapter from "@sveltejs/adapter-static"; 
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === "development"?  "development" : "production";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
        adapter: adapter({
        }),
        paths: {
            base: dev ? "":"/build"
        }
    }
};

export default config;
