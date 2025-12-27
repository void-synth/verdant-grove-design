import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Image optimization plugin
    imagetools({
      defaultDirectives: (url) => {
        // Optimize images by default
        if (url.searchParams.has("optimize")) {
          return new URLSearchParams({
            format: "webp",
            quality: "80",
          });
        }
        return new URLSearchParams();
      },
    }),
    // Compression plugin for production
    mode === "production" &&
      viteCompression({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 1024, // Only compress files larger than 1KB
        deleteOriginFile: false,
      }),
    mode === "production" &&
      viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 1024,
        deleteOriginFile: false,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
    rollupOptions: {
      output: {
        // Optimize chunk splitting for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split(".") || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(ext)) {
            return `assets/videos/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Enable minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
  },
}));
