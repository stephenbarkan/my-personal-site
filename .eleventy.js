const htmlmin = require("html-minifier");

const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");
  eleventyConfig.addWatchTarget("./scripts/*.js");
  eleventyConfig.addWatchTarget("./images/*");
  eleventyConfig.addWatchTarget("./favicons/*");

  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (process.env.ELEVENTY_PRODUCTION && outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("favicons");
  eleventyConfig.addPassthroughCopy("songs");

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  //merge data files
  eleventyConfig.setDataDeepMerge(true);

  //collections
  const publishedPosts = (post) => !post.data.draft;
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByTag("post").reverse().filter(publishedPosts);
  });

  eleventyConfig.addCollection("designs", (collection) => {
    return collection.getFilteredByTag("design");
  });
};
