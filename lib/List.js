Observer = require("./Observer").Observer;

class List extends Observer {
  createMarkup(state) {
    return "ok";
  }

  update() {
    Observer.update();
  }
}
module.exports = List;
