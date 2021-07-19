const Project = require("../models/project-model")

class IndexController {
  async index(req, res, next) {
    try {
      const projects = await Project.find()
      return res.json(projects)
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new IndexController();

