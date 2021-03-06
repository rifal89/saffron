import BaseApplication from './base';
import { WrapBus } from 'mesh';
import expect from 'expect.js';

describe(__filename + '#', function () {
  it('can be created', function () {
    BaseApplication.create();
  });

  it('can be created with properties', function () {
    var app = BaseApplication.create({ a: 'b' });
    expect(app.a).to.be('b');
  });

  it('properly initializes the application', async function () {
    var app = BaseApplication.create();
    var events = [];
    app.busses.push(WrapBus.create((event) => events.push(event)));
    await app.initialize();
    expect(events.length).to.be(2);
    expect(events[0].type).to.be('load');
    expect(events[1].type).to.be('initialize');
  });

  it('cannot initialize the application twice', async function () {
    const app = BaseApplication.create();
    await app.initialize();
    let err;
    try {
      await app.initialize();
    } catch (e) { err = e; }
    expect(err).not.to.be(void 0);
  });
});
