import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";

export default {
  input: "./lib/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [css(), vue({ css: true })],
};
