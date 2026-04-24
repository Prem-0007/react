import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  base: "/react/lesss%20go/",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
