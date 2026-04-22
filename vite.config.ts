import { devtools } from '@tanstack/devtools-vite'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

const config = defineConfig({
  base: '/',
  resolve: { tsconfigPaths: true },
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact(), nitro()],
})

export default config
