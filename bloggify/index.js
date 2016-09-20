module.exports = {
    metadata: {
        siteTitle: "Bloggify"
      , description: "We make publishing easy."
      , domain: process.env.NODE_ENV === "production" ? "https://bloggify.org" : "http://localhost:8080"
    }
  , theme: {
        previewLink: "https://preview.bloggify.org"
    }
};
