import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig(() => {
  return {
    base: './',
    plugins: [
      VueMacros({
        plugins: {
          vue: vue(),
        },
      }),
      UnoCSS(),
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dts: true,
        dirs: ['src/composables', 'src/utils'],
        vueTemplate: true,
      }),
      Components({
        dts: true,
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vue') || id.includes('@vueuse')) {
                return 'vendor-vue'
              }
              if (id.includes('ant-design-vue')) {
                return 'vendor-antd'
              }
              return 'vendors'
            }
            if (id.includes('composables') || id.includes('utils')) {
              return 'game-logic'
            }
          }
        }
      }
    }
  }
}) 
