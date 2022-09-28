const yaml = require("js-yaml");
module.exports = function(eleventyConfig){
    eleventyConfig.setTemplateFormats([
        "jpg",
        "pdf",
        "md",
        "njk",
        "webp",
        "png",
        "css",
        "js",
        "html"
      ]);

      eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    return {
        markdownTemplateEngine: "njk",    
    dir: {
        layouts: "_layouts"

    },
    }
   
};