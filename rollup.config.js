import { defineConfig } from "rollup";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
export default defineConfig({
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "esm",
    name: "pack-to-counter",
  },
  external: ["react", "react-dom"],
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
    }),
  ],
});
