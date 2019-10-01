/*
  Oggetto in cui salvo tutti i json relativi ai file caricati
*/
Observer = require("./Observer").Observer;
/*
function update(){
  Observer.update();
};
*/
class List extends Observer {
  createMarkup(state) {
    return "ok";
  }

  update() {  // Appena carico mando una notifica all'observer che monitora i file (li conta,ecc...) da fare ancora
    Observer.update();
  }
}

module.exports = {
  List
}
