const axios = require('axios');

module.exports = class app {
  constructor() {
    this.incrementalCount = 0;
  }

  async capitaliseRandomWord() {
    const res = await axios.get('http://localhost:3333/name');
    const name = res.data.toUpperCase();

    return name;
  }

  addCount() {
    console.log('count', this.incrementalCount);
    this.incrementalCount++;
    console.log('count', this.incrementalCount);
  }

  getCount() {
    return this.incrementalCount;
  }

  destroy() {
    process.exit(1);
  }

  callSequence(number) {
    switch (number) {
      case 0:
        this.addCount();
        break;
      case 1:
        this.destroy();
        break;
    }
  }
};
