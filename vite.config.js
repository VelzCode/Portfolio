import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    base: "/Portfolio/",
    plugins: [react(),
    babel({ presets: [reactCompilerPreset()] })
    ],
})