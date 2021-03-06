const htmlmin = require("html-minifier");

module.exports = (eleventyConfig) => {
  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

  // Add a HTML timestamp formatter filter to Nunjucks
  eleventyConfig.addFilter(
    "htmlDateDisplay",
    require("./filters/timestamp.js")
  );

  eleventyConfig.addFilter("markdownify", (markdownString) => {
    const MarkdownIt = require("markdown-it");
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });

    return md.render(markdownString);
  });

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Collections
  eleventyConfig.addCollection("portfolio", (collection) => {
    return collection.getFilteredByTag("portfolio").reverse();
  });

  const publishedJournals = (post) => !post.data.draft;
  eleventyConfig.addCollection("journal", (collection) => {
    return collection
      .getFilteredByTag("journal")
      .reverse()
      .filter(publishedJournals);
  });

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("portfolio", "layouts/portfolio.njk");
  eleventyConfig.addLayoutAlias("journal", "layouts/journal.njk");

  // Include our static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("javascript");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("webfonts");
  eleventyConfig.addPassthroughCopy("songs");

  //merge data files
  eleventyConfig.setDataDeepMerge(true);

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "globals",
    },
  };
};
