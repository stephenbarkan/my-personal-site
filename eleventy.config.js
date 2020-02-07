const htmlmin = require("html-minifier");

module.exports = eleventyConfig => {
  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

  // Add a HTML timestamp formatter filter to Nunjucks
  eleventyConfig.addFilter(
    "htmlDateDisplay",
    require("./filters/timestamp.js")
  );

  eleventyConfig.addFilter("markdownify", markdownString => {
    const MarkdownIt = require("markdown-it");
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });

    return md.render(markdownString);
  });

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Collections
  eleventyConfig.addCollection("blog", collection => {
    return collection.getFilteredByTag("blog").reverse();
  });

  eleventyConfig.addCollection("note", collection => {
    return collection.getFilteredByTag("note").reverse();
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("test", "layouts/test.njk");

  // Include our static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("javascript");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("webfonts");
  eleventyConfig.addPassthroughCopy("songs");


  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "globals"
    }
  };
};