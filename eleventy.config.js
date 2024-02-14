const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = (config) => {
    // Add Eleventy RSS plugin
    config.addFilter("dateToRfc3339", pluginRss.dateToRfc3339)
    config.addFilter("dateToRfc822", pluginRss.dateToRfc822)
    config.addFilter("getNewestCollectionItemDate", pluginRss.getNewestCollectionItemDate)
    config.addFilter("absoluteUrl", pluginRss.absoluteUrl)
    config.addFilter("convertHtmlToAbsoluteUrls", pluginRss.convertHtmlToAbsoluteUrls)

    // Copy the fonts folder without modification
    config.addPassthroughCopy("src/assets/fonts")
    config.addPassthroughCopy("src/assets/images")

    // Add styles.css to dev watch targets so we get automatic reload
    // when the base stylesheet changes.
    config.addWatchTarget("./src/assets/css/styles.css")
    config.addWatchTarget("./src/assets/js/site.ts")

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes",
            layouts: "_layouts",
        },
        htmlTemplateEngine: "liquid",
    }
}
