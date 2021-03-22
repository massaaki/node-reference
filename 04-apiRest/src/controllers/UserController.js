import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const response = await User.create(req.body);
      const { id, name, email } = response;
      return res.json({ id, name, email });
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
      const user = await User.findByPk(req.userId);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }
      const response = await user.update(req.body);
      const { id, name, email } = response;
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      await user.destroy();
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new UserController();
