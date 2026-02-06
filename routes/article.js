const express = require('express');
const ArticleController = require('../controllers/article');

class ArticleRouter {
    constructor() {
        this.router = express.Router();
        this.controller = ArticleController;

        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/', this.controller.getAllArticles);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new ArticleRouter().getRouter();