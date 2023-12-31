// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import svgrPlugin from "vite-plugin-svgr";
// import envCompatible from "vite-plugin-env-compatible";

// // https://vitejs.dev/config/
// process.env = { ...process.env, ...loadEnv("mock", process.cwd()) };

// export default defineConfig({
//   envPrefix: "REACT_APP_",
//   // This changes the out put dir from dist to build
//   // comment this out if that isn't relevant for your project
//   build: {
//     outDir: "build",
//   },
//   plugins: [
//     react(),
//     envCompatible(),
//     svgrPlugin({
//       svgrOptions: {
//         icon: true,
//         // ...svgr options (https://react-svgr.com/docs/options/)
//       },
//     }),
//   ],
//   server: {
//     port: parseInt(process.env.VITE_PORT),
//   },
// });

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

process.env = { ...process.env, ...loadEnv("mock", process.cwd()) };

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_PORT),
  },
});
