const express = require('express');
const UserController = require('../controllers/user');

class UserRouter {
    constructor() {
        this.router = express.Router();
        this.controller = UserController;

        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/users/register', this.controller.register);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new UserRouter().getRouter();