// import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    // const newStudent = await Student.create({
    //   firstName: 'firstname2', lastName: 'lastname2', email: 'some2@email.com', age: 21,
    // });
    // res.json({ student: newStudent });
    res.json({ status: 'ok' });
  }
}

export default new HomeController();
