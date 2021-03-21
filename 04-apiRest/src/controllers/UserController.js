import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const response = await User.create(req.body);
      res.json({ User: response });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
