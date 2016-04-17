import expect from 'expect.js';
import Application from './index';
import { LOAD, INITIALIZE } from 'common/messages';

describe(__filename + '#', function() {
  it('can be created', function() {
    var app = Application.create();
  });

  it('dispatches an load & initialize messages', async function() {
    var app = Application.create();
    var messages = [];
    app.notifier.push({
      notify(m) {
        messages.push(m);
      }
    });

    await app.initialize();
    expect(messages[0].type).to.be(LOAD);
    expect(messages[1].type).to.be(INITIALIZE);
  });
});
