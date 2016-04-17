export default function(value, clazz, message) {
  if (!(value instanceof clazz)) {
    throw new Error(message || `value must be a ${clazz}`);
  }  
}