import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({ errors: ['invalid credentials'] });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['invalid user'] });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ errors: ['user or password invalid'] });
    }

    const { id } = user;

    const token = jwt.sign(
      {
        id,
        email,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRES_TIME,
      },
    );

    return res.json({ token });
  }
}

export default new TokenController();
