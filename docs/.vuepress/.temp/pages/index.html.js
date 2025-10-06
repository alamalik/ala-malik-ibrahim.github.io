import comp from "C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Alaa Malik\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1759499047000,\"contributors\":[{\"name\":\"Alaa Malik\",\"username\":\"\",\"email\":\"ensw00822@student.su.edu.krd\",\"commits\":2}],\"changelog\":[{\"hash\":\"13ed023f8a0e019c460c128b17dc66b774f63368\",\"time\":1759499047000,\"email\":\"ensw00822@student.su.edu.krd\",\"author\":\"Alaa Malik\",\"message\":\"2nt push\"},{\"hash\":\"04ebe07bb80e93fb6c4fa33ecbb0b6a044230a61\",\"time\":1759489557000,\"email\":\"ensw00822@student.su.edu.krd\",\"author\":\"Alaa Malik\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"index.md\"}")
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
