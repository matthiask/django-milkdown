const esbuild = require("esbuild")

esbuild.build({
  entryPoints: ["main.js"],
  outfile: "django_milkdown/static/django_milkdown.js",
  bundle: true,
  minify: true,
})
