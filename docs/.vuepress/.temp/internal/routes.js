export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Alaa Malik"} }],
  ["/READM.html", { loader: () => import(/* webpackChunkName: "READM.html" */"C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/READM.html.js"), meta: {"title":""} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"Contact Me"} }],
  ["/projects/", { loader: () => import(/* webpackChunkName: "projects_index.html" */"C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/projects/index.html.js"), meta: {"title":"💼 My Projects"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"About Me"} }],
  ["/skills/", { loader: () => import(/* webpackChunkName: "skills_index.html" */"C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/skills/index.html.js"), meta: {"title":"Skills"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Jin-pS/Desktop/my_portfolio1/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
