// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/mateus/labs/dalbinaco.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/mateus/labs/dalbinaco.github.io/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/mateus/labs/dalbinaco.github.io/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/mateus/labs/dalbinaco.github.io/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/home/mateus/labs/dalbinaco.github.io/src/pages/projects.js"))
}

exports.json = {
  "layout-index.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/layout-index.json"),
  "404.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/404.json"),
  "layout-index.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/layout-index.json"),
  "about.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/about.json"),
  "layout-index.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/layout-index.json"),
  "index.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/index.json"),
  "layout-index.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/layout-index.json"),
  "projects.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/projects.json"),
  "layout-index.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/layout-index.json"),
  "404-html.json": require("/home/mateus/labs/dalbinaco.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/home/mateus/labs/dalbinaco.github.io/.cache/layouts/index.js"))
}