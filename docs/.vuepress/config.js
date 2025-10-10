import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'My Portfolio',
  description: 'Welcome to my site',
  base: '/alamalikibrahimm.github.io/', // 👈 must match your repo name!
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Skills', link: '/skills/' },
      { text: 'Contact', link: '/contact/' },
    ],
  }),
})
