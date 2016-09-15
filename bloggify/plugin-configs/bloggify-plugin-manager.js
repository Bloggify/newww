module.exports = {
    plugins: [
        "bloggify-router",
        "bloggify-ajs-renderer",
        "bloggify-viewer"
    ]
};

if (process.env.NODE_ENV === "production") {
    module.exports.plugins.push("bloggify-analytics", "bloggify-mongoose");
}
