import comp from "C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/skills/index.html.vue"
const data = JSON.parse("{\"path\":\"/skills/\",\"title\":\"Skills\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1759495578000,\"contributors\":[{\"name\":\"Alaa Malik\",\"username\":\"\",\"email\":\"ensw00822@student.su.edu.krd\",\"commits\":2}],\"changelog\":[{\"hash\":\"4b720c35c487520624a3f60f8f710d0054b730ef\",\"time\":1759495578000,\"email\":\"ensw00822@student.su.edu.krd\",\"author\":\"Alaa Malik\",\"message\":\"1st\"},{\"hash\":\"04ebe07bb80e93fb6c4fa33ecbb0b6a044230a61\",\"time\":1759489557000,\"email\":\"ensw00822@student.su.edu.krd\",\"author\":\"Alaa Malik\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"skills/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
