import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Alaa Malik Portfolio',
  description: 'UI/UX Designer & Frontend Developer',

  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about.html' },
      { text: 'Projects', link: '/projects.html' },
      { text: 'Contact', link: '/contact.html' },
    ],
  }),

  bundler: viteBundler(),
})
