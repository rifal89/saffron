import BaseObject from 'common/object/base';
import { DisplayEntity } from 'common/entities';
import {
  SetToolMessage,
  SetFocusMessage,
  PREVIEW_STAGE_MOUSE_DOWN
} from 'editor/message-types';

const CURSOR_HEIGHT = 12;

class TextTool extends BaseObject {

  constructor(properties) {
    super({ type: 'text', cursor: 'text', ...properties });
  }

  notify(message) {

    switch(message.type) {
      case PREVIEW_STAGE_MOUSE_DOWN: return this.addTextEntity(message);
    }
  }

  addTextEntity(message) {

    var f = this.app.fragments;

    var entity = f.queryOne('entities/element').factory.create({
      tagName: 'span',
      layerExpanded: true,
      attributes: {
        style: {
          position   : 'absolute',
          color      : 'black',
          left       : Math.round(message.x) + 'px',
          fontSize   : '14px',
          textAlign  : 'left',
          fontFamily : 'Helvetica',

          // offset cursor height
          top        : Math.round(message.y - CURSOR_HEIGHT) + 'px'
        }
      }
    }, [
      this.app.fragments.queryOne('entities/text').factory.create({
        value: 'Type in text here'
      })
    ])

    this.app.rootEntity.children.push(entity);

    // bring the new item into focus
    this.notifier.notify(SetFocusMessage.create(entity));

    setTimeout(() => {
      // next, change the tool to the text editor tool
      this.notifier.notify(SetToolMessage.create(this.editTextTool));
    }, 50);
  }
}

export default TextTool;
