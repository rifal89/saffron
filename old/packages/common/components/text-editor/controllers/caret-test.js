import Caret from './caret';
import Marker from './marker';
import TextEditor from './text-editor';
import expect from 'expect.js';
import NotifierCollection from 'common/notifiers/collection';

describe(__filename + '#', function() {

  it('can be created', function() {
    Caret.create({
      editor: TextEditor.create({
        notifier: NotifierCollection.create()
      })
    });
  });

  it('can return the cell position', function() {
    var te = TextEditor.create({
      source: 'abc\n123',
      notifier: NotifierCollection.create()
    });

    var c = te.caret;

    expect(c.getCell()).to.eql({
      row: 0,
      column: 0
    });

    c.setPosition(4);

    expect(c.getCell()).to.eql({
      row: 1,
      column: 0
    });
  });

  it('does not move the position of the cursor if the entered character is a new line and whiteSpace is nowrap', function() {
    var te = TextEditor.create({
      notifier: NotifierCollection.create(),
      source: 'abc',
      style: { whiteSpace: 'nowrap' }
    });

    te.notifier.notify({ type: 'input', text: '\n', preventDefault: function() { } });
    expect(te.marker.position).to.be(0);
  });
});
