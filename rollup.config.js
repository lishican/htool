import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";

import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

import { uglify } from "rollup-plugin-uglify";
import { minify } from "uglify-es";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/h.js",
    format: "umd", //(amd, cjs, es, iife, umd)
    name: "h"
  },
  watch: {
    exclude: "node_modules/**",
    exclude: "test/**"
  },

  sourceMap: true,
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),

    commonjs(),
    json(),
    postcss({
      plugins: [autoprefixer, cssnano],
      extract: "./dist/h.css"
    }),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"],
      runtimeHelpers: true
    }),
    uglify({}, minify)
  ]
};
