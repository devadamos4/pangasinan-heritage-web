import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  // GitHub Pages project sites are served from
  // https://<user>.github.io/pangasinan-heritage-web/, so every built asset
  // URL needs that subpath prefix — without this, JS/CSS/image requests 404
  // on Pages and both Performance and Best Practices scores collapse.
  base: mode === 'production' ? '/pangasinan-heritage-web/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  esbuild: {
    // Strip console/debugger calls from the production bundle — smaller
    // output and avoids "errors/warnings logged to console" Lighthouse flags.
    drop: mode === 'production' ? ['console', 'debugger'] : []
  },
  build: {
    target: 'es2018',
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    // Split React/ReactDOM into their own chunk so the vendor code (which
    // rarely changes) is cached separately from app code (which changes
    // often) — repeat visits only re-download the small app chunk.
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
}))
