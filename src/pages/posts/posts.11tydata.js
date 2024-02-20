module.exports = () => {
    return {
        layout: "post",
        permalink: "/posts/{{ title | slugify }}/",
        tags: ["posts"],
        date: process.env.CI === "true" ? "git Last Modified" : "Last Modified",
    }
}
