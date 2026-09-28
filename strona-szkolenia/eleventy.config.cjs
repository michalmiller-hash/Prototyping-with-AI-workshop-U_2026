const MarkdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  const markdown = new MarkdownIt({ html: false, linkify: true, typographer: false });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("sortByNumber", (entries = []) =>
    [...entries].sort((a, b) => a.data.number - b.data.number),
  );

  eleventyConfig.addFilter("materialFor", (entries = [], number) =>
    entries.find((entry) => entry.data.number === number),
  );

  eleventyConfig.addFilter("pad2", (value) => String(value).padStart(2, "0"));
  eleventyConfig.addFilter("markdownInline", (value = "") => markdown.renderInline(value));

  eleventyConfig.setServerOptions({
    port: 8000,
    showAllHosts: false,
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
