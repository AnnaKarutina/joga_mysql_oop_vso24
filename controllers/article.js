const ArticleModel = require('../models/article');

class ArticleController {

    constructor() {
        this.model = ArticleModel;
        this.getAllArticles = this.getAllArticles.bind(this);
    }

    async getAllArticles(req, res) {
        try {
            const articles = await this.model.findAll();
            res.status(201).json({articles: articles});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new ArticleController();