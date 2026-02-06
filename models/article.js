const BaseSQLModel = require('./base');

class ArticleModel extends BaseSQLModel {
  constructor() {
    super('article');
  }

  async findOne(slug) {
    return await super.findOne('slug', slug);
  }

}

module.exports = new ArticleModel();