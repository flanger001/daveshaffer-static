module.exports = () => {
    return {
        layout: "post",
        permalink: "/posts/{{ title | slugify }}/",
        tags: ["posts"],
        date: "Created"
    }
}
