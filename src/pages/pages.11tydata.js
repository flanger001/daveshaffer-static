module.exports = () => {
    return {
        layout: "base.liquid",
        date: process.env.CI === "true" ? "git Last Modified" : "Last Modified",
    }
}
