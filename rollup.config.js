import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { defineConfig } from 'rollup'

const __ENV__ = process.env.NODE_ENV ?? 'development';

export default defineConfig((args) => {
    return {
        input: 'src/main.js',
        output: {
            file: 'dist/main.js',
            format: 'esm',
            sourcemap: "inline"
        },
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify(__ENV__),
                preventAssignment: true,
            }),
            lwc({
                modules: [
                    { npm: "@salesforce-ux/design-system" }
                ],
                sourcemap: "inline"
            }),
            args.watch &&
            serve({
                open: args.open,
                port: 3000,
            }),
            args.watch && livereload(),
        ],
    };
});
