// You can import a library
const axios = require('axios');
jest.mock('axios');
const app = require('./app');

describe('app', () => {
  let myApp;

  beforeEach(() => {
    myApp = new app();
  });

  describe('capitaliseRandomWord', () => {
    it('should get name in capital', async done => {
      // use mock to replace the actual implementation
      axios.get.mockResolvedValue({ data: 'Peter' });

      for (let i = 0; i < 100; i++) {
        const name = await myApp.capitaliseRandomWord();
        expect(name).toEqual('PETER');
      }
      done();
    });
  });

  describe('destroy', () => {
    it('should call process exit with 1', () => {
      // jest.spyOn(process, 'exit');
      process.exit = jest.fn(); // you can mock global functions too
      myApp.destroy();
      expect(process.exit).toHaveBeenCalledWith(1);
    });
  });

  describe('callSequence', () => {
    it('should call addCount if input 0', () => {
      /**
       * Using mock here will cause the actual addCount
       * impementation to NOT be called.
       */
      // myApp.addCount = jest.fn();
      jest.spyOn(myApp, 'addCount');

      myApp.callSequence(0);

      expect(myApp.addCount).toHaveBeenCalled();
      expect(myApp.getCount()).toEqual(1);
    });

    it('should call destroy if input is 1', () => {
      /**
       * You can mock a function and test it
       * seperately in another block
       */
      myApp.destroy = jest.fn();
      myApp.callSequence(1);
      expect(myApp.destroy).toHaveBeenCalled();
    });
  });
});
