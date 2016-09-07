// Configuration example
module.exports = {
    db: "mongodb://localhost/bloggify-live"
  , models: {
        Stat: {
            ip: String
          , user_agent: String
          , device: Object
          , url: String
          , path: String
          , headers: Object
          , session: Object
          , date: {
                type: Date,
                default: () => new Date()
            }
        }
    }
};
