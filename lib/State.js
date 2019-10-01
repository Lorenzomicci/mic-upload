Subject = require("./Subject").Subject;

class State extends Subject {
  constructor() {
    super();
    this.state = {};
  }

  // Chiamo update per ogni observer
  update(data = {}) {
    this.state = Object.assign(this.state, data);
    this.notify(this.state);
  }

  // Restituisco lo stato
  get() {
    return this.state;
  }
}
module.exports = {
  State
}
