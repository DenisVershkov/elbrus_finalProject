const Project = require("../models/project-model");

class ProjectController {
  async getProject(req, res, next) {
    try {
      console.log(req.params);
      const oneProject = await Project.find(req.params);
      return res.json(oneProject);
    } catch (err) {
      next(err);
    }
  }
  async createProject(req, res, next) {
    try {
      console.log(req.body);
      const newProject = await Project.create(req.body);
      return res.json(newProject);
    } catch (err) {
      next(err);
    }
  }
  async editProject(req, res, next) {
    try {
      console.log(req.body);
      console.log(req.params);
      //поправить данные на основании формы с фронта
      const { id } = req.params;
      const { name } = req.body;
      const editProject = await Project.findByIdAndUpdate(id, { name }, { new: true });
      return res.json(editProject);
    } catch (err) {
      next(err);
    }
  }
  async deleteProject(req, res, next) {
    try {
      console.log(req.params);
      const { id } = req.params;
      await Project.findByIdAndDelete(id);
      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProjectController();