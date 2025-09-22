import { defineConfig } from 'vite'

export default defineConfig({
    preview: {
        allowedHosts: ["fish.nzdev.org", "fishy.nzdev.org", "127.0.0.1", "localhost"]
    }
})
