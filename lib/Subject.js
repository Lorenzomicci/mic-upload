class Subject {
  constructor() {
    this.observers = [];
  }

  // Aggiungo un observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Rimuovo un observer
  removeObserver(observer) {
    const removeIndex = this.observers.findIndex(obs => {
      return observer === obs;
    });

    if (removeIndex !== -1) {
      this.observers = this.observers.slice(removeIndex, 1);
    }
  }

  // Chiamo update per ogni observer
  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
}
module.exports = Subject;
