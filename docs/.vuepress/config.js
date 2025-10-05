import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Alaa Malik Portfolio',
  description: 'UI/UX Designer & Frontend Developer',

  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'Projects', link: '/projects.html' },
      { text: 'Contact', link: '/contact.html' },
    ],
  }),

  bundler: viteBundler(),
})
