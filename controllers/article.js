const ArticleModel = require('../models/article');

class ArticleController {

    constructor() {
        this.model = ArticleModel;
        this.getAllArticles = this.getAllArticles.bind(this);
        this.getArticleBySlug = this.getArticleBySlug.bind(this);
    }

    async getAllArticles(req, res) {
        try {
            const articles = await this.model.findAll();
            res.status(201).json({articles: articles});
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getArticleBySlug(req, res) {
        try {
            const article = await this.model.findOne(req.params.slug);
            if (article) {
                res.status(201).json({ article: article });
            } else {
                res.status(404).json({ error: 'Article not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new ArticleController();