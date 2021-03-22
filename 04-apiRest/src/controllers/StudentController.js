import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const response = await Student.findAll();
    res.json(response);
  }
}

export default new StudentController();
