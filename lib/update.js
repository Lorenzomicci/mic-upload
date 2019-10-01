Observer = require("./Observer").Observer;

function update() {
  Observer.call(update);
}

module.exports = {
  update
}
