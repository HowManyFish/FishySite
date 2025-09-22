import { defineConfig } from 'vite'

export default defineConfig({
    preview: {
        allowedHosts: ["nzdev.org", "*.nzdev.org", "127.0.0.1", "localhost"]
    }
})
