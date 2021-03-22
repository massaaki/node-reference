class HomeController {
  async index(req, res) {
    res.json({ status: 'ok' });
  }
}

export default new HomeController();
