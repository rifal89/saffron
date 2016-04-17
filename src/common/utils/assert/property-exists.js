import assert from 'assert';

export default function(context, property) {
  assert.notEqual(context[property], void 0, `property "${property}" must exists for class "${context.constructor.name}"`);  
}