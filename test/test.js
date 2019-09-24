//Require
var assert = require('assert');
//Observer = require("../lib/Observer").Observer;
State = require("../lib/State").State;
List = require("../lib/List").List;

//Test di prova
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


//Test Metodo get
describe('Test creazione oggetti e controllo stato', function() {
  describe('state', function() {
    it('should print ok', function() {
        const appState = new State();
        const namesList = new List();
        State.get();
    });
  });
});


//Test update
describe('Update', function() {
  describe('Observe.update()', function() {
    it('should print update on console', function() {
      Observer.update();
    });
  });
});
