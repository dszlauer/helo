module.exports = {
  newUser: (req, res, next) => {
    console.log("above", req.body);
    const { username, password } = req.body;

    const db = req.app.get("db");
    db.new_user([username, password])
      .then(users => {
        console.log("below", req.body);
        res.status(200).json(users);
      })
      .catch(err => console.log("add user error", err));
  }
};
