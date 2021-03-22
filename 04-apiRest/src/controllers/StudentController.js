import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const response = await Student.findAll();
    res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['id not found'] });
      }
      const response = await Student.findByPk(id);

      if (!response) {
        return res.status(400).json({ errors: ['student not found'] });
      }

      return res.json(response);
    } catch (e) {
      return res.status(400).json({ errirs: e.errors.map((err) => err.message) });
    }
  }

  async create(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['id not found'] });
      }
      const response = await Student.findByPk(id);

      if (!response) {
        return res.status(400).json({ errors: ['student not found'] });
      }

      const newStudent = await response.update(req.body);

      return res.json(newStudent);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ['id not found'] });
      }
      const response = await Student.findByPk(id);

      if (!response) {
        return res.status(400).json({ errors: ['student not found'] });
      }
      await response.destroy();
      return res.json(response);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new StudentController();
