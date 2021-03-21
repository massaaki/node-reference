class HomeController {
  index(req, res) {
    res.json({ foo: 'bar' });
  }
}

export default new HomeController();
