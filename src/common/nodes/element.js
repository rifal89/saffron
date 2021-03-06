import Node from './base';
import Attributes from './attributes';


export default class Element extends Node {
  constructor(properties) {
    super();
    Object.assign(this, properties);
  }

  flatten(nodes = []) {
    nodes.push(this);
    this.childNodes.forEach((childNode) => {
      childNode.flatten(nodes);
    });
    return nodes;
  }

  set attributes(value) {
    this._attributes = Attributes.create(value);
  }

  get attributes() {
    return this._attributes || {};
  }

  set childNodes(value) {
    this._childNodes = value;
    for (const child of value) this._linkChild(child);
  }

  get childNodes() {

    if (!this._childNodes) {
      this._childNodes = [];
    }

    return this._childNodes;
  }

  filter(filter, ret = []) {
    if (filter(this)) ret.push(this);
    for (const child of this.childNodes) {
      child.filter(filter, ret);
    }
    return ret;
  }

  getAttribute(key) {
    return this._attributes[key];
  }

  setAttribute(key, value) {
    this._attributes[key] = value;
  }

  appendChild(child) {
    this.childNodes.push(this._linkChild(child));
  }

  removeChild(child) {
    this.childNodes.splice(this._unlinkChild(this._getChildIndex(child)), 1);
  }

  insertBefore(newChild, existingChild) {
    this.childNodes.splice(this._getChildIndex(existingChild), 0, this._linkChild(newChild));
  }

  _getChildIndex(existingChild) {
    const i = this.childNodes.indexOf(existingChild);
    if (!~i) throw new Error('child node does not exist');
    return i;
  }

  _linkChild(child) {
    child.parentNode = this;
  }

  _unlinkChild(child) {
    child.parentNode = void 0;
  }
}
