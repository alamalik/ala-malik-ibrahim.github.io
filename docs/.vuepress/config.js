import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'My Portfolio',
  description: 'Welcome to my personal site',
  base: '/alamalikibrahimm.github.io/', // 👈 very important
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'Projects', link: '/projects.html' },
      { text: 'Contact', link: '/contact.html' },
    ],
  }),
})
