import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const response = await User.create(req.body);
      return res.json({ User: response });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['id not found'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      const response = await user.update(req.body);
      return res.json(response);
    } catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['id not found'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UserController();
