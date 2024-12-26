import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['card-base', { 
      'background-color': 'white',
      'border-radius': '0.75rem',
      'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }],
    ['game-card', {
      'background-color': '#f5f5f7',
      'border-radius': '1.5rem',
      'box-shadow': '0 8px 16px rgba(0, 0, 0, 0.1)'
    }]
  ],
  shortcuts: {
    'card': 'card-base w-16 h-24 flex items-center justify-center backdrop-blur-sm',
    'game-container': 'game-card p-8 max-w-2xl mx-auto my-8',
    'apple-button': 'px-6 py-2 rounded-full font-medium transition-all duration-200 hover:opacity-80'
  }
}) 
