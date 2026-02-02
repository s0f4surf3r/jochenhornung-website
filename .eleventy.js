const markdownIt = require("markdown-it");
module.exports = function(eleventyConfig) {
  // Markdown Configuration - macht einzelne Zeilenumbrüche zu <br> Tags
  const markdownItOptions = {
    html: true,
    breaks: true,  // <-- Das ist der Schlüssel für deine Gedichte!
    linkify: true
  };
  
  const md = markdownIt(markdownItOptions);
  eleventyConfig.setLibrary("md", md);

  // Markdown filter für Frontmatter-Felder (z.B. quellen)
  eleventyConfig.addFilter("markdownify", (content) => {
    if (!content) return "";
    return md.render(content);
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy({"src/images": "images"});
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/docs");
  eleventyConfig.addPassthroughCopy("src/audio");
  // Date filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  // Sort by date (newest first)
  eleventyConfig.addCollection("sortedTexte", function(collectionApi) {
    return collectionApi.getFilteredByTag("text").sort((a, b) => {
      return b.date - a.date;
    });
  });
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
